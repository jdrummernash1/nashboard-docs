---
title: Credits
---

[← Nashboard](index.md)

# Credits

Nashboard stands on the work of many open source projects. Every GitHub project it uses, or that inspired a feature we rebuilt,
is credited here with its author and what we use it for. Thank you to everyone below.

<style>
.cr-win{position:relative;height:340px;overflow:hidden;border-radius:14px;border:1px solid var(--line,#8884);text-align:center;-webkit-mask-image:linear-gradient(transparent,#000 10%,#000 90%,transparent);mask-image:linear-gradient(transparent,#000 10%,#000 90%,transparent)}
.cr-roll{padding:0 12px;animation:cr-up 120s linear infinite}
.cr-win:hover .cr-roll,.cr-win:focus-within .cr-roll,.cr-win:focus .cr-roll{animation-play-state:paused}
@keyframes cr-up{from{transform:translateY(340px)}to{transform:translateY(-100%)}}
.cr-g{margin:0 0 22px}.cr-g h3{margin:0 0 10px;font-size:.95rem;letter-spacing:.05em;text-transform:uppercase}
.cr-i{margin:0 0 10px}.cr-i b{display:block}.cr-i span{display:block;font-size:.9rem;opacity:.8}
@media (prefers-reduced-motion:reduce){.cr-win{display:none}}
</style>

<div class="cr-win" tabindex="0" role="region" aria-label="Scrolling credits. Hover or focus to pause; the plain list follows below.">
<div class="cr-roll" aria-hidden="true">
{% for g in site.data.credits %}<div class="cr-g"><h3>{{ g.group }}</h3>
{% for i in g.items %}<div class="cr-i"><b>{{ i.repo }}</b><span>by @{{ i.author }}: {{ i.use }}</span></div>
{% endfor %}</div>
{% endfor %}</div>
</div>

## The full list

{% for g in site.data.credits %}### {{ g.group }}

{% for i in g.items %}- [{{ i.author }}/{{ i.repo }}]({{ i.url }}): {{ i.use }}
{% endfor %}
{% endfor %}

The same list rolls by on the app's About page. When Nashboard starts using another GitHub project, it is added here too.
