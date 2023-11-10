// We are going to render these components based on the URL the user enters in the browser
// taking the part of the URL which does not include domain and port
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