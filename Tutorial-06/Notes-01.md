# Static files

CSS files, JS files, Image, video files etc are considerd as static files in ExpressJS

To serve the Static files such as images css and js use the `express.static` built-in middleware function in Express.

`Syntax:-` express.static(root,[options])

```js
    app.use(express.static('public'))
```

## Virtual path

To create a virtual path prefix (where the path does not actually exist in the file system) for files that are served by the express.static function, specify a mount path for static directory as shown below

```js
    app.use('/static',express.static('public'))

    // https://localhost:3000/static/css/style.css
```

The path you proved to express.static function is relative to directory from where you launch your node process. If you run the express app from another repository, it's safer to use the absolute path of directory that you want to serve

## Serving Static file

you can serve static files (such as CSS, JavaScript, images, etc.) using the express.static middleware. This middleware function is built into Express and allows you to specify a directory that contains your static files. Here's how you can use it:

### Create a Directory for Your Static Files

First, create a directory in your project where you'll store your static files, for example, a folder named public. Inside this folder, you can have subdirectories for different types of files like css, js, images, etc.

```static
project-root-directory
    ├── public
    │   ├── css
    │   │   └── styles.css
    │   ├── js
    │   │   └── script.js
    │   └── images
    │       └── logo.png
    ├── app.js
    └── 
```

### Set Up Express to Use express.static Middleware

In your Express application (app.js or any other file where you set up your Express app), use express.static middleware to specify the directory where your static files are located. You can do this before defining your routes.

```js
    const express = require('express');
    const path = require('path');

    const app = express();

    // Specify the directory for static files
    app.use(express.static(path.join(__dirname, 'public')));
    // Define your routes below
    // ...
```

In the code above, __dirname represents the current directory of the file where this code is written. path.join(__dirname, 'public') constructs an absolute path to your public directory.

Accessing Static Files in HTML or Templates:
Now, you can link to your static files directly in your HTML or template files. For example, in an HTML file, you can link to the styles.css file like this:

`<link rel="stylesheet" href="/css/styles.css">`

The URL path (/css/styles.css) corresponds to the directory structure inside your public folder.

With this setup, Express will serve any file from the specified directory as a static file. When you access /css/styles.css in your browser, Express will serve the styles.css file from your public/css directory.
