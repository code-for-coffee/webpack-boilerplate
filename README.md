## Webpack 2 Boilerplate

#### Quickstart

1. Clone this repository to your local machine.
2. Run `yarn install` to install dependencies from your `package.json`.
3. Install Webpack globally using `npm i -g webpack@beta webpack-dev-server@beta`.
3. Place source files for your client side code inside of the `./src` directory. 
4. Open the `webpack.config.js` and add starting source files to your `entry` file. Note the current entry file is `app.js` and there is currently an `./src/app.js`; you can add other source files as well.
5. Create an `index.html` HTML file in your `./src` directory and add a link to `<script src="/dist/app.bundle.js"></script>` in your HTML file.
6. In your terminal, run `webpack-dev-server` to launch your webserver.
7. Run `webpack -p` to begin running Webpack in production mode. Browse to `localhost:8080` to see your website.

## Important Notes

* Webpack's **production** mode is ran using the `-p` flag. It bundles, uglifies, and minifies output.
* 