import Heading from './components/heading/heading.js' // 'Heading' is the common dependency for both 'hello-world' and 'kiwi'
import KiwiImage from './components/kiwi-image/kiwi-image.js'
import React from 'react'

const heading = new Heading()
heading.render('kiwi');

const kiwiImage = new KiwiImage()
kiwiImage.render();