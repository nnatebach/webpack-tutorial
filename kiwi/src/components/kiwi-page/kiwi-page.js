import Heading from '../heading/heading.js';
import KiwiImage from '../kiwi-image/kiwi-image.js';

class KiwiPage {
  render() {
    const heading = new Heading();
    heading.render('kiwi');
    const kiwiImage = new KiwiImage();
    kiwiImage.render();

    // Import the 'image-caption'
    import('ImageCaptionApp/ImageCaption').then(ImageCaptionModule => {
      const ImageCaption = ImageCaptionModule.default;
      const imageCaption = new ImageCaption();
      imageCaption.render('Kiwi fruit is oval, about the size of a large egg.')
    });
  }
}

// Exposing the page component to the application
export default KiwiPage;