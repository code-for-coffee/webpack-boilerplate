import SampleComponent from './components/SampleComponent';

window.onload = (event) => {

  let myComponent = new SampleComponent('#root', 'Hey there! This is the Webpack 3.x Boilerplate!');
  myComponent.render();

  let lazyBtn = document.querySelector('#lazy-btn');
  lazyBtn.addEventListener('click', (event) => {

    console.log('Loading LazyLoadingComponent');

    System.import('./components/LazyLoadingComponent').then((LazyLoadingComponent) => {
      console.log(LazyLoadingComponent);
      let lazyComponent = new LazyLoadingComponent('.lazy');
      lazyComponent.render();
    }).catch((error) => {
      console.log(error);
    });
  });

};

/**
 * request
 * @param URI URL for an API, such as http://api.gogoair.com
 * @param hook a function that is called when response JSON is provided
 */
const request = async (URI, hook) => {
  const response = await fetch(URI);
  const json = await response.json();
  //console.log(json);
  if (typeof hook === "function") hook(json);
};

/**
 * jsonRequest
 * Async fetch method that fetches a URI and passes JSON to a hook function
 */
export const jsonRequest = request;