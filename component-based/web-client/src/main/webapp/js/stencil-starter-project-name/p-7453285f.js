const t="stencil-starter-project-name";let e,n,r=0,l=!1;const s=window,o=document,c={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,r)=>t.addEventListener(e,n,r),rel:(t,e,n,r)=>t.removeEventListener(e,n,r)},a=(()=>!!o.documentElement.attachShadow)(),i=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),u=new WeakMap,m=t=>u.get(t),f=(t,e)=>u.set(e.s=t,e),p=t=>console.error(t),$=new Map,d=new Map,_=[],w=[],h=[],y=(t,e)=>n=>{t.push(n),l||(l=!0,e&&4&c.t?g(j):c.raf(j))},b=(t,e)=>{let n=0,r=0;for(;n<t.length&&(r=performance.now())<e;)try{t[n++](r)}catch(l){p(l)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},j=()=>{r++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){p(e)}t.length=0})(_);const t=2==(6&c.t)?performance.now()+10*Math.ceil(r*(1/22)):1/0;b(w,t),b(h,t),w.length>0&&(h.push(...w),w.length=0),(l=_.length+w.length+h.length>0)?c.raf(j):r=0},g=t=>Promise.resolve().then(t),S=y(w,!0),M=t=>"object"==(t=typeof t)||"function"===t,v=()=>s.CSS&&s.CSS.supports&&s.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_stencil_starter_project_name("./p-d8631f0b.js").then(()=>{c.o=s.__stencil_cssshim}),R=async()=>{c.o=s.__stencil_cssshim;const e=new RegExp(`/${t}(\\.esm)?\\.js($|\\?|#)`),n=Array.from(o.querySelectorAll("script")).find(n=>e.test(n.src)||n.getAttribute("data-stencil-namespace")===t),r=n["data-opts"];{const t=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,s.location.href));return U(t.href),window.customElements||await __sc_import_stencil_starter_project_name("./p-d0882b30.js"),Object.assign(Object.assign({},r),{resourcesUrl:t.href})}},U=e=>{const n=(t=>`__sc_import_${t.replace(/\s|-/g,"_")}`)(t);try{s[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(r){const t=new Map;s[n]=r=>{const l=new URL(r,e).href;let c=t.get(l);if(!c){const e=o.createElement("script");e.type="module",e.src=URL.createObjectURL(new Blob([`import * as m from '${l}'; window.${n}.m = m;`],{type:"application/javascript"})),c=new Promise(t=>{e.onload=()=>{t(s[n].m),e.remove()}}),t.set(l,c),o.head.appendChild(e)}return c}}},L=new WeakMap,O=t=>"sc-"+t,k=(t,e,...n)=>{let r=null,l=!1,s=!1,o=[];const c=e=>{for(let n=0;n<e.length;n++)r=e[n],Array.isArray(r)?c(r):null!=r&&"boolean"!=typeof r&&((l="function"!=typeof t&&!M(r))&&(r=String(r)),l&&s?o[o.length-1].i+=r:o.push(l?P(null,r):r),s=l)};c(n);const a=P(t,null);return a.u=e,o.length>0&&(a.p=o),a},P=(t,e)=>({t:0,$:t,i:e,_:null,p:null}),x={},C=(t,n,r)=>{let l,s,c=n.p[r],a=0;if(null!==c.i)l=c._=o.createTextNode(c.i);else if(l=c._=o.createElement(c.$),(t=>null!=t)(e)&&l["s-si"]!==e&&l.classList.add(l["s-si"]=e),c.p)for(a=0;a<c.p.length;++a)(s=C(t,c,a))&&l.appendChild(s);return l},A=(t,e,r,l,s,o)=>{let c,a=t;for(a.shadowRoot&&a.tagName===n&&(a=a.shadowRoot);s<=o;++s)l[s]&&(c=C(null,r,s))&&(l[s]._=c,a.insertBefore(c,e))},E=(t,e,n,r)=>{for(;e<=n;++e)(r=t[e])&&r._.remove()},T=(t,e)=>t.$===e.$,W=(t,e)=>{const n=e._=t._,r=t.p,l=e.p;null===e.i?null!==r&&null!==l?((t,e,n,r)=>{let l,s=0,o=0,c=e.length-1,a=e[0],i=e[c],u=r.length-1,m=r[0],f=r[u];for(;s<=c&&o<=u;)null==a?a=e[++s]:null==i?i=e[--c]:null==m?m=r[++o]:null==f?f=r[--u]:T(a,m)?(W(a,m),a=e[++s],m=r[++o]):T(i,f)?(W(i,f),i=e[--c],f=r[--u]):T(a,f)?(W(a,f),t.insertBefore(a._,i._.nextSibling),a=e[++s],f=r[--u]):T(i,m)?(W(i,m),t.insertBefore(i._,a._),i=e[--c],m=r[++o]):(l=C(e&&e[o],n,o),m=r[++o],l&&a._.parentNode.insertBefore(l,a._));s>c?A(t,null==r[u+1]?null:r[u+1]._,n,r,o,u):o>u&&E(e,s,c)})(n,r,e,l):null!==l?(null!==t.i&&(n.textContent=""),A(n,null,e,l,0,l.length-1)):null!==r&&E(r,0,r.length-1):t.i!==e.i&&(n.data=e.i)},F=(t,e)=>{e&&!t.h&&e["s-p"].push(new Promise(e=>t.h=e))},q=(t,e,n,r)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const l=e.s,s=()=>B(t,e,n,l,r);let o;return F(e,e.j),r&&(o=V(l,"componentWillLoad")),z(o,()=>S(s))},B=(t,r,l,s,c)=>{const i=t["s-rc"];c&&((t,e)=>{const n=((t,e)=>{let n=O(e.g),r=d.get(n);if(t=11===t.nodeType?t:o,r)if("string"==typeof r){let e,l=L.get(t=t.head||t);l||L.set(t,l=new Set),l.has(n)||((e=o.createElement("style")).innerHTML=r,t.insertBefore(e,t.querySelector("link")),l&&l.add(n))}else t.adoptedStyleSheets.includes(r)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,r]);return n})(a&&t.shadowRoot?t.shadowRoot:t.getRootNode(),e);10&e.t&&(t["s-sc"]=n,t.classList.add(n+"-h"))})(t,l);try{((t,r,l,s)=>{n=t.tagName;const o=r.S||P(null,null),c=(t=>t&&t.$===x)(s)?s:k(null,null,s);c.$=null,c.t|=4,r.S=c,c._=o._=t.shadowRoot||t,e=t["s-sc"],W(o,c)})(t,r,0,s.render())}catch(u){p(u)}r.t&=-17,r.t|=2,i&&(i.forEach(t=>t()),t["s-rc"]=void 0);{const e=t["s-p"],n=()=>H(t,r,l);0===e.length?n():(Promise.all(e).then(n),r.t|=4,e.length=0)}},H=(t,e,n)=>{const r=e.j;64&e.t||(e.t|=64,t.classList.add("hydrated"),e.M(t),r||N()),e.h&&(e.h(),e.h=void 0),512&e.t&&g(()=>q(t,e,n,!1)),e.t&=-517},N=()=>{o.documentElement.classList.add("hydrated"),c.t|=2},V=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(r){p(r)}},z=(t,e)=>t&&t.then?t.then(e):e(),D=(t,e,n)=>{if(e.v){const r=Object.entries(e.v),l=t.prototype;if(r.forEach(([t,[r]])=>{(31&r||2&n&&32&r)&&Object.defineProperty(l,t,{get(){return((t,e)=>m(t).R.get(e))(this,t)},set(n){((t,e,n,r)=>{const l=m(this),s=l.U,o=l.R.get(e),c=l.t,a=l.s;(n=((t,e)=>null==t||M(t)?t:1&e?String(t):t)(n,r.v[e][0]))===o||8&c&&void 0!==o||(l.R.set(e,n),a&&2==(18&c)&&q(s,l,r,!1))})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;l.attributeChangedCallback=function(t,n,r){c.jmp(()=>{const n=e.get(t);this[n]=(null!==r||"boolean"!=typeof this[n])&&r})},t.observedAttributes=r.filter(([t,e])=>15&e[0]).map(([t,n])=>{const r=n[1]||t;return e.set(r,t),r})}}return t},G=(t,e={})=>{const n=[],r=e.exclude||[],l=o.head,f=s.customElements,_=l.querySelector("meta[charset]"),w=o.createElement("style"),h=[];let y,b=!0;Object.assign(c,e),c.l=new URL(e.resourcesUrl||"./",o.baseURI).href,e.syncQueue&&(c.t|=4),t.forEach(t=>t[1].forEach(e=>{const l={t:e[0],g:e[1],v:e[2],L:e[3]};l.v=e[2],!a&&1&l.t&&(l.t|=8);const s=l.g,o=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,U:t,R:new Map};e.O=new Promise(t=>e.M=t),t["s-p"]=[],t["s-rc"]=[],u.set(t,e)})(t=this),1&l.t&&(a?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){y&&(clearTimeout(y),y=null),b?h.push(this):c.jmp(()=>((t,e)=>{if(0==(1&c.t)){const n=()=>{},r=m(t);if(!(1&r.t)){r.t|=1;{let e=t;for(;e=e.parentNode||e.host;)if(e["s-p"]){F(r,r.j=e);break}}e.v&&Object.entries(e.v).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),g(()=>(async(t,e,n,r,l)=>{if(0==(32&e.t)){e.t|=32;{if((l=(t=>{const e=t.g.replace(/-/g,"_"),n=t.k,r=$.get(n);return r?r[e]:__sc_import_stencil_starter_project_name(`./${n}.entry.js`).then(t=>($.set(n,t),t[e]),p)})(n)).then){const t=()=>{};l=await l,t()}l.isProxied||(D(l,n,2),l.isProxied=!0);const t=()=>{};e.t|=8;try{new l(e)}catch(c){p(c)}e.t&=-9,t()}const t=O(n.g);if(!d.has(t)&&l.style){const e=()=>{};let r=l.style;8&n.t&&(r=await __sc_import_stencil_starter_project_name("./p-affe7c09.js").then(e=>e.scopeCss(r,t,!1))),((t,e,n)=>{let r=d.get(t);i&&n?(r=r||new CSSStyleSheet).replace(e):r=e,d.set(t,r)})(t,r,!!(1&n.t)),e()}}const s=e.j,o=()=>q(t,e,n,!0);s&&s["s-rc"]?s["s-rc"].push(o):o()})(t,r,e))}n()}})(this,l))}disconnectedCallback(){c.jmp(()=>void 0)}"s-hmr"(t){}forceUpdate(){((t,e)=>{{const n=m(t);2==(18&n.t)&&q(t,n,e,!1)}})(this,l)}componentOnReady(){return m(this).O}};l.k=t[0],r.includes(s)||f.get(s)||(n.push(s),f.define(s,D(o,l,1)))})),w.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",w.setAttribute("data-styles",""),l.insertBefore(w,_?_.nextSibling:l.firstChild),b=!1,h.length>0?h.forEach(t=>t.connectedCallback()):c.jmp(()=>y=setTimeout(N,30,"timeout"))};export{v as a,G as b,k as h,R as p,f as r};