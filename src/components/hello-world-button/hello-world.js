// import CSS file
import './hello-world-button.css'

// Classes are a template for creating objects.
class HelloWorldButton {
  render() {
    const button = document.createElement('button')
    // innerHTML - gets or sets the HTML or XML markup contained within the element.
    // Setting the value of innerHTML removes all of the element's descendants and replaces them with nodes constructed by parsing the HTML given in the string htmlString.
    button.innerHTML = 'Hello World'
    button.classList.add('hello-world-button') // add CSS
    const body = document.querySelector('body')
    // When somebody clicks on it, it will create a paragraph element containing some text inside.
    button.onclick = function () {
      const p = document.createElement('p')
      p.innerHTML = 'Hello world!'
      p.classList.add('hello-world-text') // add CSS
      body.appendChild(p)
    }
    body.appendChild(button)
  }
}

export default HelloWorldButton;