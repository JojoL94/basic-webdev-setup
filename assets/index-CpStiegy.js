(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function p(){const f=document.querySelectorAll(".magnetic-container"),a="250";f.forEach(t=>{t.addEventListener("mousemove",u),t.addEventListener("mouseenter",l),t.addEventListener("mouseleave",m)});function i(t){return{background:t.target.querySelector(".magnetic-background"),element:t.target.querySelector(".magnetic-element"),text:t.target.querySelector(".magnetic-text")}}function u(t){const n=t.layerX-t.target.clientWidth/2,o=t.layerY-t.target.clientHeight/2,{background:s,element:c,text:d}=i(t);s&&c&&d&&(s.style.transform=`translate(${n/6}px, ${o/6}px)`,c.style.transform=`translate(${n/4}px, ${o/4}px)`,d.style.transform=`translate(${n/4}px, ${o/4}px)`)}function e(t){const{background:n,element:o,text:s}=i(t),c=`all ${a}ms ease`;n&&o&&s&&(n.style.transition=c,o.style.transition=c,s.style.transition=c)}function r(t){const{background:n,element:o,text:s}=i(t);setTimeout(()=>{n&&o&&s&&(n.style.transition="",o.style.transition="",s.style.transition="")},a)}function l(t){e(t),r(t)}function m(t){const{background:n,element:o,text:s}=i(t);e(t),n.style.transform="translate(0px, 0px)",o.style.transform="translate(0px, 0px)",s.style.transform="translate(0px, 0px)",r(t)}}p();
