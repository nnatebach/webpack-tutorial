// 1.
import Kiwi from './kiwi.jpg'
import altText from './altText.txt'

function addImage () {
  // 2.
  const img = document.createElement('img')
  // 3.
  img.alt = altText;
  img.width = 300;
  img.src = Kiwi;
  // 4.
  const body = document.querySelector('body');
  body.appendChild(img);
}

// 5.
export default addImage;