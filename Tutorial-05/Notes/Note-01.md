# Controller

In Express.js, a controller is a design pattern that helps organize and manage the logic for handling HTTP requests. Controllers are responsible for processing requests, interacting with models (if applicable), and sending appropriate responses back to clients. They help keep your application organized and maintainable by separating concerns and promoting a modular structure.

Here's how you can create and use controllers in Express.js:

`Create a Controller File:`
Start by creating a new file for your controller. Conventionally, controllers are placed in a "controllers" directory within your Express.js project.

```js
    // controllers/userController.js
    const UserController = {};

    UserController.getAllUsers = (req, res) => {
    // Handle logic to fetch all users from a database or other source
    // ...
    res.json(users); // Send a JSON response
    };

    UserController.getUserById = (req, res) => {
    // Handle logic to fetch a user by ID
    // ...
    res.json(user); // Send a JSON response
    };

    module.exports = UserController;
```

In this example, we've created a simple user controller with two methods, getAllUsers and getUserById, which handle different HTTP requests related to users.

`Import and Use the Controller:`
In your Express application, import the controller and use it in your routes. Here's an example of how you can set up routes to use the UserController:

```js
    const express = require('express');
    const app = express();
    const UserController = require('./controllers/userController'); // Import the controller

    // Define routes that use the controller methods
    app.get('/users', UserController.getAllUsers);
    app.get('/users/:id', UserController.getUserById);

    // Start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });
```

In this code, we import the UserController and use its methods as route handlers for specific routes. When a request is made to /users, UserController.getAllUsers will be called, and for a request to /users/:id, UserController.getUserById will be called.

Using controllers in Express.js helps maintain a clean separation of concerns in your application, making it easier to manage and scale as your project grows. It also promotes reusability of code and enhances the testability of your application's logic.
