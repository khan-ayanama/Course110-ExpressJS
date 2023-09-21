# Router in ExpressJS

The Router is a middleware that allows you to group route handlers together and organize your routes in a modular way. This can make your code more organized and maintainable, especially for larger applications.

## Here's a basic example of how to use the Router in Express.js

1. First, you need to import Express and create an instance of the router:

    ```js
        const express = require('express');
        const router = express.Router();
    ```

2. Next, you can define routes for this router using the HTTP methods like get, post, put, delete, etc. For example:

    ```js
        // Define a GET route
        router.get('/', (req, res) => {
        res.send('This is the homepage');
        });

        // Define a POST route
        router.post('/submit', (req, res) => {
        // Handle form submission
        res.send('Form submitted');
        });
    ```

3. Once you've defined your routes on the router, you need to attach the router to your Express application. This is usually done in your main app file (e.g., app.js):

```js
    const express = require('express');
    const app = express();

    // Import the router
    const router = require('./your-router-file.js'); // Replace with the actual path to your router file

    // Attach the router to a specific URL path
    app.use('/myapp', router);
```

In this example, the router will be used for all routes starting with "/myapp". For instance, the route defined as router.get('/', ...) will be accessible as "/myapp/", and the route defined as router.post('/submit', ...) will be accessible as "/myapp/submit".

Using routers helps you break down your application into smaller, manageable components and keeps your code organized. It's especially useful for structuring your API endpoints or creating modular parts of your web application.
