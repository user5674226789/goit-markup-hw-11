/* empty css                      */import{f as h,i as y}from"./assets/vendor-77e16229.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();let l,a;const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(r){l=r[0],a=l-f.defaultDate,a<0?y.error({color:"red",position:"topRight",message:"Please choose a date in the future"}):(c.disabled=!1,u.disabled=!0)}};function g(r){const t=Math.floor(r/864e5),s=Math.floor(r%864e5/36e5),m=Math.floor(r%864e5%36e5/6e4),p=Math.floor(r%864e5%36e5%6e4/1e3);return{days:t,hours:s,minutes:m,seconds:p}}h("#datetime-picker",f);const u=document.querySelector("#datetime-picker"),c=document.querySelector("[data-start]"),i=document.querySelectorAll(".value");console.log(i);c.disabled=!0;c.addEventListener("click",r=>{const n=setInterval(()=>{if(a=l-new Date,u.disabled=!0,a<0){c.disabled=!0,u.disabled=!1,clearInterval(n);return}const o=g(a);i[0].textContent=o.days.toString().padStart(2,"0"),i[1].textContent=o.hours.toString().padStart(2,"0"),i[2].textContent=o.minutes.toString().padStart(2,"0"),i[3].textContent=o.seconds.toString().padStart(2,"0")},1e3)});
//# sourceMappingURL=commonHelpers.js.map
