/**
 * Created by code-for-coffee on 1/23/17.
 */
import lang from "../helpers/Data";

console.log("Loaded LazyLoadingComponent.js");

class LazyLoadingComponent {
  constructor(el) {
    this.props = {};
    this.el = el;
  }
  render() {
    let el = document.querySelector(this.el);
    el.innerHTML = lang.data;
  }
}

export default LazyLoadingComponent;
