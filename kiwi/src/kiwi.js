import Heading from './components/heading/heading.js';
import KiwiImage from './components/kiwi-image/kiwi-image.js';

const heading = new Heading();
heading.render();
const kiwiImage = new KiwiImage();
kiwiImage.render();

// remote bundles are loaded ASYNCHRONOUSLY => use dynamic import
// 'HelloWorldApp' was specified in 'webpack.production.config.js'
// 'HelloWorldButton' is the name of the component that 'hello-world' application exposes to the outer world ('hello-world/webpack.dev.config.js')
import('HelloWorldApp/HelloWorldButton')
  // import the whole module (hello-world/src/components/hello-world-button/hello-world-button.js)
  .then(HelloWorldButtonModule => {
    // since we used the default export when defining the modern component, we need to get that default export
    const HelloWorldButton = HelloWorldButtonModule.default;
    // now we can use 'HelloWorldButton' component as if it was defined in this application.
    // here we are using a component that is defined in another application and it is not even listed as a dependency in the 'package.json'. This button is loaded dynamically at runtime.
    const helloWorldButton = new HelloWorldButton();
    helloWorldButton.render();
  })