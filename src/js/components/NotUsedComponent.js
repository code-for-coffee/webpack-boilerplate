/**
 * Created by code-for-coffee on 1/10/17.
 */
console.log("Loaded Component.js");

class NotUsedComponent {
  constructor(el, content) {
    this.props = {};
    this.props.content = content;
    this.el = el;
  }
  render() {
    const el = document.querySelector(this.el);
    el.innerHTML = this.props.content;
  }
}

export default NotUsedComponent;
