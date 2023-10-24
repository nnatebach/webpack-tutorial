// using Babel in JavaScript
// Reason: We want to use the latest JavaScript features in all browsers.
// Problem: Not all browsers support the latest version of JavaScript => We might have to wait for some times in order to use those features.
// Solution: Babel (JavaScript compiler) can convert modern JavaScript code into older JavaScript code that is already supported by all major browsers.
//// NOTE: This problem is NO longer the case for the current JS and Chrome Version 118.0.5993.88 (Official Build) (arm64)
// This lesson 18 'Using Latest JavaScript Features With Babel' can be used as a sample


// import CSS file
import './hello-world-button.scss'

// Classes are a template for creating objects.
class HelloWorldButton {
  buttonCssClass = 'hello-world-button'
  render() {
    const button = document.createElement('button')
    button.innerHTML = 'Hello World'
    const body = document.querySelector('body')
    button.onclick = function () {
      const p = document.createElement('p')
      p.innerHTML = 'Hello world!'
      p.classList.add('hello-world-text')
      body.appendChild(p)
    }
    button.classList.add(this.buttonCssClass)
    body.appendChild(button)
  }
}

export default HelloWorldButton;