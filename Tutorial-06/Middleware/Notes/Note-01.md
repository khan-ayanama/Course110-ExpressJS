# Middleware

Middleware functions are functions that have access to the request object (req) and response object (res), and the next function in the application's request-response cycle.

The enxt function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

Middlware functions can perform the following tasks:

* Execute any code.
* Make changes to the request and response objects
* End the request-response cycle

## Creating Middleware

Creating middleware in Express is a powerful way to perform tasks, manipulate requests or responses, and add functionality to your application. Middleware functions have access to the request object (req), the response object (res), and the next function in the application's request-response cycle. Here's how you can create middleware in Express:

### Basic Middleware

Middleware functions are added to the request-response cycle using the app.use() method. Here's a simple example of a middleware function:

```javascript
    const express = require('express');
    const app = express();

    // Custom middleware function
    const myMiddleware = (req, res, next) => {
    console.log('This is my middleware!');
    next(); // Call next to pass control to the next middleware in the stack
    };

    // Use the middleware for all routes
    app.use(myMiddleware);

    // Route handler
    app.get('/', (req, res) => {
    res.send('Hello, Boss!');
    });

    app.listen(3000, () => {
    console.log('Server is running at port 3000...');
    });
```

In this example, myMiddleware is a simple middleware function that logs a message. It is added to the application using app.use().

### Middleware for Specific Routes

You can also apply middleware to specific routes. The middleware will only be executed for requests that match the specified route.

```javascript
    const express = require('express');
    const app = express();

    // Custom middleware function
    const myMiddleware = (req, res, next) => {
    console.log('This is my middleware for /special route!');
    next();
    };

    // Use the middleware for a specific route
    app.use('/special', myMiddleware);

    // Route handler
    app.get('/special', (req, res) => {
    res.send('Special route, Boss!');
    });

    app.listen(3000, () => {
    console.log('Server is running at port 3000...');
    });
```

In this case, myMiddleware will only be executed for requests to the "/special" route.

### Error Handling Middleware

Middleware functions can also be used for error handling by specifying an additional parameter (usually named err). If a middleware function receives an error, it can handle it and pass it to the next middleware or send an appropriate response.

```javascript
    const express = require('express');
    const app = express();

    // Custom error-handling middleware
    const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong, Boss!');
    };

    // Use the error-handling middleware
    app.use(errorHandler);

    // Route handler
    app.get('/', (req, res) => {
    // Simulate an error
    next(new Error('Simulated error'));
    });

    app.listen(3000, () => {
    console.log('Server is running at port 3000...');
    });
```

The errorHandler middleware will catch errors thrown in the application and handle them appropriately.

These are just basic examples, Boss. Middleware in Express can become more complex, allowing you to perform various tasks such as authentication, logging, request/response modification, and more. Feel free to ask if you have specific use cases or questions about Express middleware!

## Built-in Middleware

* `express.static:` Serves static assets such as HTML, images, js and so on.
* `express.json:` parses incoming request with JSON payloads
* `express.urlencoded:` parses incoming requests with URL-encoded payloads.
