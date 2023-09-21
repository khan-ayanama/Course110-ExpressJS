# Express Application Generator

Use the application generator tool, express-generator, to quickly create an application skeleton.

```js
    // To create an application directory with npx
    npx express-generator --view=ejs myapp

    // Using npm
    npm install -g express-generator
    express --view=ejs myapp

    npm install

    // Set in package.json
    DEBUG=myapp:* & npm start
```

## Express Diretory

* `myapp:` Application/Project Folder
* `bin:` It contains executible file that starts your app. It starts the server (on port 3000, if no alternative is provided) and sets up some basic error handling.
* `public:` Everything in this folder is accessible to people connecting to application. We can put JS, CSS,Images and other assets
* `routes:` We can put all our route files. The generator creates two files, index.js and users.js
* `views:` files used by out templating engine
* `App.js:` It creates an express application object (named app, by convention) sets up the application with various and settings and middleware, and then exports the app from module.
