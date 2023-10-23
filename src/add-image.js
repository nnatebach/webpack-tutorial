// 1.
import Kiwi from './kiwi.jpg'

function addImage () {
  // 2.
  const img = document.createElement('img')
  // 3.
  img.alt = 'kiwi';
  img.width = 300;
  img.src = Kiwi;
  // 4.
  const body = document.querySelector('body');
  body.appendChild(img);
}

// 5.
export default addImage;