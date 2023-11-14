# Express JS Introduction

Express Js is fast, unoponionated, minimalist web framework for Nodejs

## Installing ExpressJS

```js
    // For stable version
    npm install express

    // For specific version
    npm install express@>=5.0.0-alpha.8
```

## ExpressJS Hello World

```js
    const express = require("express");
    const app = express();

    const port = 8000;

    app.get("/", (req, res) => {
    res.send("<h1>Hello World!!</h1>");
    });

    app.listen(port, () => {
    console.log(`Server is running one port ${port}`);
    });
```

## BABEL

Babel is a toolchain that is mainly used to convert ECMAScript code backward compatible version of JS in current and older browser.

* It transform syntax
* Polyfill features that are missing in your target environment
* Source code transformations

### Babel packages

1. `@babel/core`: This is main package to run any babel setup or configuration.
2. `@babel/cli`: Babel comes with a built in CLI which can be used to compile files from command line
3. `@babel/preset-env`: This enables to use new and upcoming features which nodejs is yet to understand.

### Babel CLI

* `Compile Files:`

```js
    // Compile index.js file
    npx babel index.js

    // Compile index.js file to index-compiled.js file (We can use -o instead of --out-file)
    npx babel index.js --out-file index-compiled.js

    // Compile file each time when something changes (we can use -w instead of --watch)
    npx babel index.js --watch --out-file index-compiled.js
```

`Note:` Don't forget to add .babelrc file and define the preset in it.

* `Compile Directory:`

```js
    // Compiles entire folder to prd folder (We can use -d instead of --out-dir)
    npx babel src --out-dir prd

    // Compiles entire directory and concate it into single file
    npx babel src --out-file index-compiled.js
```

### Setup Babel

1. Install All required Babel packages

    ```js
        npm install @babel/core @babel/cli @babel/preset-env
    ```

2. Create a file called .babelrc at the root directory of Project and write

    ```js
        {"preset":[
            "@babel/preset-env"
            ]}
    ```

3. Open package.json file

    ```js
        "scripts":{
            "build":"babel index.js --out-file prd",
            "start":"npm run build && nodemon prd/index.js",
            "serve":"node prd/indes.js"
        }
    ```

## Meaning of @

When you use the "@" symbol before the package name in an npm install command like this:

```js
    npm install @babel/core
```

You are telling npm to specifically look for the "babel" scope and install the "core" package within that scope. This makes it clear which package you want to install, even if there are other packages with the same name in the npm registry.
