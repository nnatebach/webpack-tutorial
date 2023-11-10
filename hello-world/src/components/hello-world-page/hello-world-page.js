import HelloWorldButton from '../hello-world-button/hello-world-button.js';
import Heading from '../heading/heading.js';

class HelloWorldPage {
  render() {
    const heading = new Heading();
    heading.render('Hello World');
    const helloWorldButton = new HelloWorldButton();
    helloWorldButton.render();
  }
}

// Exposing the page component to the application
export default HelloWorldPage;