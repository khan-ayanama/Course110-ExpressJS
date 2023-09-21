# Routing

Routing refers to when client hit certain url then what will server responds.

* Each Route can have one or more callback functions, which are executed when the route is matched

* `Syntax:`

```js
    app.method(path,callback)
    
    // OR

    app.method(path,[callback1,callback2,..])

    // OR

    app.method(path,[callback1,callback2,...],callback)
```

* app is an instance of express
* method of an HTTP request method, in lowercase
* path is a path on server
* callback is the function executed when the route is matched

## Methods

* `GET:` Retrive Data
* `POST:` Create/Insert Data
* `PUT:` Completely Update Data
* `PATCH:` Partiall update data
* `DELETE:` Delete Data
* `ALL:` Any HTTP Request Method

## Path

* `Path:` Route paths can be strings, string patterns, or regular expressions. Query strings are not part of the route path.
* The caracters ?,+,* and () are subsets of their regular expression counterparts.
* The hypher (-) and the dot (.) are interpreted literally by string-based paths.
* If you need to use the dollar character($) in a path string, enclose it excaped within ([and])

```js
    const express = require("express");
    const app = express();

    const port = process.env.PORT || 3000;

    // Home route
    app.get("/", (req, res) => {
    res.send(`<h1>Home Page</h1>`);
    });

    // /about route
    app.get("/about", (req, res) => {
    res.send(`<h1>About Page</h1>`);
    });

    // Anything after /api/*
    app.get("/api/*", (req, res) => {
    res.send(`<h1>API Page</h1>`);
    });

    // String pattern
    app.get("/ab?cd", (req, res) => {
    res.send(
        `<h1>This will only work for acd or abcd Here character before ? is optional so b is optional</h1>`
    );
    });

    // Any URL which is not defined
    app.get("*", (req, res) => {
    res.send(`<h1>Page not Found</h1>`);
    });

    app.listen(port, () => {
    console.log("App started");
    });
```

## Callbacks

* `Callback:` Route Callbacks can be in the form of a function, an array of functions, or combination of both.
* You can provide multiple callback functions that behave like middleware to handle a request. The only exception is that these callbacks might invoke next ('route') to bypass the remaining route callbacks.

```js
    // CALLBACKS

    const express = require("express");
    const app = express();

    const port = process.env.PORT || 3000;

    // One callback
    app.get("/onecallback", (req, res) => {
    res.send(`<h1>One Callback</h1>`);
    });

    // More than one callback
    app.get(
    "/twocallback",
    (req, res, next) => {
        console.log("From first callback");
        next();
    },
    (req, res) => {
        res.send(`<h2>Two callback 2</h2>`);
    }
    );

    // Array of Callbacks
    const cb1 = (req, res, next) => {
    console.log("First Callback");
    next();
    };
    const cb2 = (req, res, next) => {
    console.log("Second Callback");
    next();
    };
    const cb3 = (req, res, next) => {
    console.log("Third Callback");
    next();
    };

    app.get("/arraycallback", [cb1, cb2, cb3], (req, res) => {
    console.log("Last Callback");
    res.send("<h1>Array of callback</h1>");
    });

    app.listen(port, () => {
    console.log("App started");
    });
```

## Chained Route Callbacks

`app.route(path):` It returns an instance of single route, which ou can then use to handle HTTP verbs with optional middleware. Use app.route() to avoid duplicate route names

```js
    // Chained Route Callbacks

    const express = require("express");
    const app = express();

    const port = process.env.PORT || 3000;

    app
    .route("/students")

    .all((req, res, next) => {
        console.log("HTTP ALL Request");
        next();
    })
    .post(() => {
        console.log("post method");
    })
    .patch(() => {
        console.log("patch method");
    })
    .get((req, res) => {
        console.log("HTTP get Request");
        res.send("<h1>GET METHOD</h1>");
    });
    .update((req, res) => {
        console.log("HTTP update Request");
    });
    .delete((req, res) => {
        console.log("HTTP delete Request");
    });

    app.listen(port, () => {
    console.log("App started");
    });
```
