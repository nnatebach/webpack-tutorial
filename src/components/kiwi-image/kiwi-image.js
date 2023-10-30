import kiwiImage from './kiwi.jpg'
import './kiwi-image.scss'

class kiwiImage {
  render() {
    const img = document.createElement(img)
    img.src = kiwiImage;
    img.alt = 'kiwiImage'
    img.classList.add('kiwi-image')
    const bodyDOM = document.querySelector(body)
    bodyDOM.appendChild(img)
  }
}

export default kiwiImage();