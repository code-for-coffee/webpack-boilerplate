import SampleComponent from './components/SampleComponent';

window.onload = (event) => {
  let myComponent = new SampleComponent('.note', 'Hey there! Webpack 2.x is working!');
  myComponent.render();
};