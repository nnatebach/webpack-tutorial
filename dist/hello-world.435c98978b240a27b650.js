(()=>{"use strict";const e=new class{buttonCssClass="hello-world-button";render(){const e=document.createElement("button");e.innerHTML="Hello World";const n=document.querySelector("body");e.onclick=function(){const e=document.createElement("p");e.innerHTML="Hello world!",e.classList.add("hello-world-text"),n.appendChild(e)},e.classList.add(this.buttonCssClass),n.appendChild(e)}};e.render(),(new class{render(){const e=document.createElement("h1"),n=document.querySelector("body");e.innerHTML="Webpack is AWESOME!",n.appendChild(e)}}).render(),(new class{render(){const e=document.createElement(e);e.src="23de234a71129d9c860b.jpg",e.alt="kiwiImage",e.classList.add("kiwi-image"),document.querySelector(body).appendChild(e)}}).render(),console.log("production"),e.notFoundMethod()})();