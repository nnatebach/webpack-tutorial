import Heading from '../components/heading/heading.js';
import KiwiImage from '../components/kiwi-image/kiwi-image.js';

class KiwiPage {
  render() {
    const heading = new Heading();
    heading.render('kiwi');
    const kiwiImage = new KiwiImage();
    kiwiImage.render();
  }
}

// Exposing the page component to the application
export default KiwiPage;