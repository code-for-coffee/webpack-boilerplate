import SampleComponent from './components/SampleComponent';
import {jsonRequest} from './helpers/jsonRequest';

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

  jsonRequest('https://api.github.com/users/code-for-coffee/repos', console.log);
};

