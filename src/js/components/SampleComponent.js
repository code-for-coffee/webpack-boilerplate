/**
 * Created by code-for-coffee on 1/10/17.
 */
class Component {
  constructor(el, content) {
    this.props = {}
    this.props.content = content;
    this.el = el;
  }
  render() {
    let el = document.querySelector(this.el);
    el.innerHTML = this.props.content;
  }
}

module.exports = Component;