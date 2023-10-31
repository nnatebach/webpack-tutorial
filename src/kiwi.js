import Heading from './components/heading/heading.js' // 'Heading' is the common dependency for both 'hello-world' and 'kiwi'
import KiwiImage from './components/kiwi-image/kiwi-image.js'
import _ from 'lodash'

const heading = new Heading()
heading.render(_.upperFirst('kiwi'));

const kiwiImage = new KiwiImage()
kiwiImage.render();