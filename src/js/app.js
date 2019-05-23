import "./styles.css";

import SampleComponent from "./components/SampleComponent";
import { jsonRequest } from "./helpers/jsonRequest";

window.onload = event => {
  const myComponent = new SampleComponent(
    "#root",
    "Hey there! This is the Webpack 4.x Boilerplate!"
  );
  myComponent.render();

  const lazyBtn = document.querySelector("#lazy-btn");
  lazyBtn.addEventListener("click", evt => {
    console.log("Loading LazyLoadingComponent");

    import("./components/LazyLoadingComponent")
      .then(LazyLoadingComponent => {
        console.log(LazyLoadingComponent.default);
        debugger;
        const lazyComponent = new LazyLoadingComponent.default(".lazy");
        lazyComponent.render();
      })
      .catch(error => {
        console.log(error);
      });
  });

  jsonRequest(
    "https://api.github.com/users/code-for-coffee/repos",
    console.log
  );
};
