import NavigationBar from './components/navigation-bar/navigation-bar.js';

// create a navigation bar component that will allow the user to switch between these micro-frontends by clicking the corresponding links on the page
const navigationItems = [
  {
    url: '/hello-world-page',
    title: 'Hello World Page'
  },
  {
    url: '/kiwi-page',
    title: 'Kiwi Page'
  }
]

// Consume the component
const navigationBar = new NavigationBar();
navigationBar.render(navigationItems)

// We are going to render these components based on the URL the user enters in the browser
const url = window.location.pathname;

// render the 'HelloWorldPage' on one URL and 'KiwiPage' on another URL
if (url === '/hello-world-page') {
  // Use dynamic import here because remote bundles are loaded asynchronously
  import('HelloWorldApp/HelloWorldPage').then(HelloWorldPageModule => {
    // get the page from the default export
    const HelloWorldPage = HelloWorldPageModule.default;
    // use HelloWorldPage component as if it was defined in this application
    const helloWorldPage = new HelloWorldPage();
    helloWorldPage.render();
  })
} else if (url === '/kiwi-page') {
  import('KiwiApp/KiwiPage').then(KiwiPageModule => {
    const KiwiPage = KiwiPageModule.default;
    const kiwiPage = new KiwiPage();
    kiwiPage.render();
  })
}

console.log('dashboard');