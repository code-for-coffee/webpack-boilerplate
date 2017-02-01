import SampleComponent from './components/SampleComponent';

window.onload = (event) => {

  let myComponent = new SampleComponent('.note', 'Hey there! Webpack 2.x is working!');
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