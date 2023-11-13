// This file is being used when kiwi application is being run as a standalone application and not part of the module federation
// You might run it like this during the development phase, especially if your federated modules are a bit larger than what you have in this course and they are being developed by different teams.

// Reuse the code of the 'kiwi' page component
import KiwiPage from './components/kiwi-page/kiwi-page.js';

const kiwiPage = new KiwiPage();
kiwiPage.render();


// import Heading from './components/heading/heading.js';
// import KiwiImage from './components/kiwi-image/kiwi-image.js';

// const heading = new Heading();
// heading.render('kiwi');
// const kiwiImage = new KiwiImage();
// kiwiImage.render();