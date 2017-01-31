import _ from 'lodash';
import SampleComponent from './components/SampleComponent';

window.onload = (event) => {

  let myComponent = new SampleComponent('.note', 'Hey there! Webpack 2.x is working!');
  myComponent.render();

  let lazyBtn = document.querySelector('#lazy-btn');
  lazyBtn.addEventListener('click', (event) => {

    console.log('Loading LazyLoadingComponent');
    // import based on airline, aka ./asa/components/index
    // fetch appropriate repos, etc
    // do the thang - this would prolly npm run setup to grab from config val
    System.import('./components/LazyLoadingComponent').then((LazyLoadingComponent) => {
      console.log(LazyLoadingComponent);
      let lazyComponent = new LazyLoadingComponent('.lazy');
      lazyComponent.render();
    }).catch((error) => {
      console.log(error);
    });
  });

};