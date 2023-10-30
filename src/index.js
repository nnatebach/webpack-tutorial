import HelloWorldButton from './components/hello-world-button/hello-world.js'
import Heading from './components/heading/heading.js'

const helloWorldButton = new HelloWorldButton()
helloWorldButton.render();

const heading = new Heading()
heading.render()

// Check to see which Webpack mode we are currently in
if (process.env.NODE_ENV === 'production') {
  console.log('production');
} else {
  console.log('development');
}

// NOTE: 'production' and 'development' mode handles errors differently
// intentionally invoke a method that does not exist
helloWorldButton.notFoundMethod()