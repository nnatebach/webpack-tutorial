import HelloWorldButton from './components/hello-world-button/hello-world.js'
import Heading from './components/heading/heading.js'

const helloWorldButton = new HelloWorldButton()
helloWorldButton.render();

// const heading = new heading()
// ERROR: Module parse failed: Identifier 'heading' has already been declared
// Solution: the name of the variable and the name of the 'new' Constructor MUST be different!!
// NOTE: The name of the 'new' Constructor MUST be the SAME as the name used in 'import'
const heading = new Heading()
heading.render()

//// NOTICE: 'helloWorldButton' button comes BEFORE the 'heading'
// WHY?? Because we are rendering 'helloWorldButton' button BEFORE the 'heading'