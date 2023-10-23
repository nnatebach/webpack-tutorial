// 1. we want to use the image "kiwi.jpg" in this file => import the image
import Kiwi from './kiwi.jpg'

function addImage () {
  // 2. There is no "img" element in the DOM just yet => create the element
  const img = document.createElement('img')
  // 3. Add image properties for the element "img"
  img.alt = 'kiwi';
  img.width = 300;
  img.src = Kiwi;
  // 4. The "img" has been created but NOT YET to be assigned in the DOM
  const body = document.querySelector('body');
  body.appendChild(img);
}

// 5. Export the function => So we can use it in a different module
export default addImage;