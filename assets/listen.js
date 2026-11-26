/* Listen mode: reads the docs aloud with the browser's built-in speech (Web Speech API). No service, no data leaves the browser.
   Chapters come from the page list (same order and groups as the contents). Progress (chapter + paragraph + speed) is saved in
   this visitor's browser only (localStorage key nb-listen). */
(function () {
  var d = document, root = d.getElementById('nb-listen');
  var btn = d.querySelector('.nb-listenbtn');
  if (!root || !btn) return;
  var synth = window.speechSynthesis;
  if (!synth || typeof SpeechSynthesisUtterance === 'undefined') {
    root.querySelector('.nl-body').hidden = true;
    root.querySelector('.nl-none').hidden = false;
    btn.addEventListener('click', function () { toggle(); });
    return;
  }
  var base = root.getAttribute('data-base') || '/';
  var chapters = [];
  try { chapters = JSON.parse(d.getElementById('nb-chapters').textContent); } catch (e) {}
  function href(u) { return base.replace(/\/$/, '') + u; }
  var KEY = 'nb-listen';
  var st = { ch: 0, p: 0, rate: 1 };
  try { var s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (s) { st.ch = s.ch | 0; st.p = s.p | 0; st.rate = +s.rate || 1; } } catch (e) {}
  if (st.ch < 0 || st.ch >= chapters.length) { st.ch = 0; st.p = 0; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }

  var playing = false, token = 0, paras = null, loadedCh = -1, cache = {};
  var $ = function (s) { return root.querySelector(s); };
  var playBtn = $('.nl-play'), now = $('.nl-now'), title = $('.nl-title'), list = $('.nl-list'), rate = $('.nl-rate'), bar = $('.nl-bar');

  // Chapter list, grouped like the contents.
  var html = '', lastG = null;
  chapters.forEach(function (c, i) {
    if (c.group !== lastG) { if (lastG !== null) html += '</ul>'; html += '<h3>' + c.group + '</h3><ul>'; lastG = c.group; }
    html += '<li><button type="button" data-i="' + i + '"><span class="nl-num">' + (i + 1) + '</span>' + c.title + '</button></li>';
  });
  list.innerHTML = html + '</ul>';
  function mark() {
    [].forEach.call(list.querySelectorAll('button'), function (b) {
      var on = +b.getAttribute('data-i') === st.ch;
      if (on) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');
    });
  }
  rate.value = String(st.rate);

  // Text of a chapter: headings, paragraphs and list items; code and tables are announced in one short line.
  function extract(doc) {
    var m = doc.getElementById('content') || doc.body, out = [];
    var sel = 'h1,h2,h3,h4,p,li,blockquote,pre,table,.mermaid';
    [].forEach.call(m.querySelectorAll(sel), function (el) {
      if (el.closest('.nb-pn,nav,script,style')) return;
      var tag = el.tagName;
      if (tag === 'PRE' || tag === 'TABLE' || el.classList.contains('mermaid')) {
        if (el.closest('table') && tag !== 'TABLE') return;
        var say = tag === 'TABLE' ? 'A table is shown here on the page.' : (el.classList.contains('mermaid') ? 'A diagram is shown here on the page.' : 'A code example is shown here on the page.');
        if (out.length && out[out.length - 1].t === say) return;
        out.push({ t: say, skip: 1 }); return;
      }
      if (el.closest('pre,table,.mermaid')) return;
      if (tag === 'P' && el.querySelector('li')) return;
      var clone = el.cloneNode(true);
      [].forEach.call(clone.querySelectorAll('ul,ol,pre,table,script,style,svg,img'), function (x) { x.remove(); });
      var t = (clone.textContent || '').replace(/\s+/g, ' ').trim();
      if (t.length < 2) return;
      if (/^H[1-4]$/.test(tag) && !/[.!?:]$/.test(t)) t += '.';
      out.push({ t: t });
    });
    return out;
  }
  function load(i, cb) {
    if (cache[i]) { cb(cache[i]); return; }
    var u = chapters[i].url, here = location.pathname.replace(/index\.html$/, '');
    function done(p) { cache[i] = p; cb(p); }
    if (href(u).replace(/index\.html$/, '') === here) { done(extract(d)); return; }
    var req = token;
    fetch(href(u)).then(function (r) { if (!r.ok) throw 0; return r.text(); }).then(function (t) {
      if (req !== token && playing) { /* superseded; still cache */ }
      done(extract(new DOMParser().parseFromString(t, 'text/html')));
    }).catch(function () { done([{ t: 'This chapter could not be loaded. Check your connection.', skip: 1 }]); });
  }

  function show() {
    title.textContent = chapters[st.ch].title + ' (' + (st.ch + 1) + ' of ' + chapters.length + ')';
    var n = paras ? paras.length : 0;
    now.textContent = paras && paras[st.p] ? paras[st.p].t : (playing ? 'Loading' : 'Press play to start listening.');
    bar.max = Math.max(n - 1, 0); bar.value = Math.min(st.p, bar.max);
    bar.setAttribute('aria-valuetext', n ? 'Paragraph ' + (st.p + 1) + ' of ' + n : 'Not loaded');
    playBtn.setAttribute('aria-label', playing ? 'Pause' : 'Play');
    playBtn.setAttribute('aria-pressed', playing ? 'true' : 'false');
    playBtn.firstElementChild.innerHTML = playing ? '<path d="M7 5v14M17 5v14" />' : '<path d="M7 4.5v15l12-7.5z" />';
    btn.classList.toggle('on', playing);
    mark();
  }
  function stopSpeech() { token++; try { synth.cancel(); } catch (e) {} }
  function chunks(t) {
    var parts = t.match(/[^.!?]+[.!?]*\s*/g) || [t], out = [], cur = '';
    parts.forEach(function (s) { if ((cur + s).length > 220 && cur) { out.push(cur); cur = s; } else cur += s; });
    if (cur) out.push(cur); return out;
  }
  function speak() {
    stopSpeech();
    var my = token;
    if (!playing) { show(); return; }
    function go() {
      if (my !== token) return;
      if (loadedCh !== st.ch || !paras) { paras = null; show(); load(st.ch, function (p) { if (my !== token) return; paras = p; loadedCh = st.ch; if (st.p >= p.length) st.p = 0; go(); }); return; }
      if (st.p >= paras.length) { if (st.ch + 1 >= chapters.length) { playing = false; st.ch = 0; st.p = 0; paras = null; loadedCh = -1; save(); show(); return; } st.ch++; st.p = 0; paras = null; save(); speak(); return; }
      show(); save();
      var parts = chunks(paras[st.p].t), k = 0;
      (function next() {
        if (my !== token) return;
        if (k >= parts.length) { st.p++; go(); return; }
        var u = new SpeechSynthesisUtterance(parts[k++]);
        u.rate = st.rate; u.lang = d.documentElement.lang || 'en-US';
        u.onend = next; u.onerror = function (e) { if (my === token && e.error !== 'interrupted' && e.error !== 'canceled') { playing = false; show(); } };
        synth.speak(u);
      })();
    }
    go();
  }
  function play() { playing = true; speak(); }
  function pause() { playing = false; stopSpeech(); save(); show(); }
  function toggle(o) {
    var open = typeof o === 'boolean' ? o : root.hidden;
    root.hidden = !open; btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) { show(); try { (playing ? playBtn : playBtn).focus(); } catch (e) {} } else { try { btn.focus(); } catch (e) {} }
  }
  function goCh(i) { if (i < 0 || i >= chapters.length) return; st.ch = i; st.p = 0; paras = null; loadedCh = -1; save(); if (playing) speak(); else { show(); } }
  function goP(dl) {
    if (!paras) { load(st.ch, function (p) { paras = p; loadedCh = st.ch; goP(dl); }); return; }
    var n = st.p + dl;
    if (n < 0) { if (st.ch > 0) goCh(st.ch - 1); return; }
    if (n >= paras.length) { goCh(st.ch + 1); return; }
    st.p = n; save(); if (playing) speak(); else show();
  }

  btn.addEventListener('click', function () { toggle(); });
  $('.nl-close').addEventListener('click', function () { toggle(false); });
  playBtn.addEventListener('click', function () { playing ? pause() : play(); });
  $('.nl-pp').addEventListener('click', function () { goCh(st.ch - 1); });
  $('.nl-np').addEventListener('click', function () { goCh(st.ch + 1); });
  $('.nl-bp').addEventListener('click', function () { goP(-1); });
  $('.nl-fp').addEventListener('click', function () { goP(1); });
  rate.addEventListener('change', function () { st.rate = +rate.value || 1; save(); if (playing) speak(); });
  bar.addEventListener('change', function () { st.p = +bar.value | 0; save(); if (playing) speak(); else show(); });
  list.addEventListener('click', function (e) { var b = e.target.closest('button[data-i]'); if (!b) return; st.ch = +b.getAttribute('data-i'); st.p = 0; paras = null; loadedCh = -1; save(); play(); });
  root.addEventListener('keydown', function (e) { if (e.key === 'Escape') toggle(false); });
  window.addEventListener('pagehide', function () { try { synth.cancel(); } catch (e) {} save(); });
  show();
})();
