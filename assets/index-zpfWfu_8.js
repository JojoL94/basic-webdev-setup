(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();function m(){const u=document.querySelectorAll(".magnetic-container"),s="150";u.forEach(e=>{e.addEventListener("mousemove",a),e.addEventListener("mouseenter",c),e.addEventListener("mouseleave",d)});function i(e){return{background:e.target.querySelector(".magnetic-background"),element:e.target.querySelector(".magnetic-element")}}function a(e){const r=e.layerX-e.target.clientWidth/2,o=e.layerY-e.target.clientHeight/2,{background:l,element:f}=i(e);l.style.transform=`translate(${r/6}px, ${o/6}px)`,f.style.transform=`translate(${r/4}px, ${o/4}px)`}function t(e){const{background:r,element:o}=i(e),l=`all ${s}ms ease`;r.style.transition=l,o.style.transition=l}function n(e){const{background:r,element:o}=i(e);setTimeout(()=>{r.style.transition="",o.style.transition=""},s)}function c(e){t(e),n(e)}function d(e){const{background:r,element:o}=i(e);t(e),r.style.transform="translate(0px, 0px)",o.style.transform="translate(0px, 0px)",n(e)}}m();
