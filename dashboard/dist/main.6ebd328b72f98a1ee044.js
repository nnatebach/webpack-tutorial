(()=>{var e,r,t,n,o,a,i,l={853:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof HelloWorldApp)return e();t.l("http://localhost:9001/remoteEntry.js",(t=>{if("undefined"!=typeof HelloWorldApp)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"HelloWorldApp")})).then((()=>HelloWorldApp))},735:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof KiwiApp)return e();t.l("http://localhost:9002/remoteEntry.js",(t=>{if("undefined"!=typeof KiwiApp)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"KiwiApp")})).then((()=>KiwiApp))}},s={};function d(e){var r=s[e];if(void 0!==r)return r.exports;var t=s[e]={exports:{}};return l[e](t,t.exports,d),t.exports}d.m=l,r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);d.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var i=2&n&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,d.d(o,a),o},d.d=(e,r)=>{for(var t in r)d.o(r,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((r,t)=>(d.f[t](e,r),r)),[])),d.u=e=>e+"."+{615:"34b06485ff89c59b9fc4",811:"f89f2cc18635d5d1f87a"}[e]+".js",d.miniCssF=e=>{},d.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="dashboard:",d.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var i,l;if(void 0!==o)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var p=s[f];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==n+o){i=p;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var u=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),l&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o={615:[615],811:[811]},a={615:["default","./KiwiPage",735],811:["default","./HelloWorldPage",853]},d.f.remotes=(e,r)=>{d.o(o,e)&&o[e].forEach((e=>{var t=d.R;t||(t=[]);var n=a[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),d.m[e]=()=>{throw r},n.p=0},i=(e,t,a,i,l,s)=>{try{var d=e(t,a);if(!d||!d.then)return l(d,i,s);var f=d.then((e=>l(e,i)),o);if(!s)return f;r.push(n.p=f)}catch(e){o(e)}},l=(e,r,o)=>i(r.get,n[1],t,0,s,o),s=r=>{n.p=1,d.m[e]=e=>{e.exports=r()}};i(d,n[2],0,0,((e,r,t)=>e?i(d.I,n[0],0,e,l,t):o()),1)}}))},(()=>{d.S={};var e={},r={};d.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];d.o(d.S,t)||(d.S[t]={}),d.S[t];var a=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(r));var r};try{var o=d(e);if(!o)return;var a=e=>e&&e.init&&e.init(d.S[t],n);if(o.then)return i.push(o.then(a,r));var l=a(o);if(l&&l.then)return i.push(l.catch(r))}catch(e){r(e)}},i=[];return"default"===t&&(a(853),a(735)),i.length?e[t]=Promise.all(i).then((()=>e[t]=1)):e[t]=1}}})(),d.p="http://localhost:9000/",(()=>{var e={179:0};d.f.j=(r,t)=>{var n=d.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(179==r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=d.p+d.u(r),i=new Error;d.l(a,(t=>{if(d.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[a,i,l]=t,s=0;if(a.some((r=>0!==e[r]))){for(n in i)d.o(i,n)&&(d.m[n]=i[n]);l&&l(d)}for(r&&r(t);s<a.length;s++)o=a[s],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkdashboard=self.webpackChunkdashboard||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),"/hello-world-page"===(i=window.location.pathname)?d.e(811).then(d.t.bind(d,811,23)).then((function(e){(new(0,e.default)).render()})):"/kiwi-page"===i&&d.e(615).then(d.t.bind(d,615,23)).then((function(e){(new(0,e.default)).render()})),console.log("dashboard")})();