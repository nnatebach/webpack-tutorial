"use strict";(self.webpackChunktutorial=self.webpackChunktutorial||[]).push([[745],{745:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,l(n.key),n)}}function l(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===n(t)?t:String(t)}r.r(t),r.d(t,{default:()=>i});const i=function(){function e(){var t,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,n="hello-world-button",(r=l(r="buttonCssClass"))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n}var t,r;return t=e,(r=[{key:"render",value:function(){var e=document.createElement("button"),t=document.querySelector("body");e.innerHTML="Hello world",e.onclick=function(){var e=document.createElement("p");e.innerHTML="Hello world",e.classList.add("hello-world-text"),t.appendChild(e)},e.classList.add("hello-world-button"),t.appendChild(e)}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}()}}]);