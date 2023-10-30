import Kiwi from './kiwi.jpg'
import './kiwi-image.scss'

class KiwiImage {
  render() {
    const img = document.createElement(img)
    img.src = Kiwi;
    img.alt = 'kiwiImage'
    img.classList.add('kiwi-image')
    const bodyDOM = document.querySelector(body)
    bodyDOM.appendChild(img)
  }
}

export default KiwiImage;