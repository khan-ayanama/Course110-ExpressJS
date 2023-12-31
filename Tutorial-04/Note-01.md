# Route Parameter

Route parameters are named URL segments that are used to capture the values specified at their position in the URL.

The captured values are populated in the req.params object, with that name of the route parameter specified in the path as their perspective keys.

* The name of parameter must be made up of "word characters" ([A-Za-z0-0])

`Examples:`

```js
    /student/:id
    www.example.com/student/12

    /product/:category/:id
    www.example.com/product/mobile/23

    /product/order/:year/and/:month
    www.example.com/order/2023/and/oct

    /train/:from-:to
    www.example.com/train/ranchi-dhanbad

    /location/:state.:city
    www.example.com/location/jh.ranchi
```

## Route Parameter with RegX

To have more control over the exact string that can be matched by a route parameter, you can append a regular expression in parenthesis(())

`Example:`

```js
    /student/:id([0-9]{2})
    www.example.com/student/12

    /product/order/:year/and/:month([a-z])
    www.example.com/order/2021/and/oct
```

## App.Param()

In Express.js, app.param() is a method used to specify middleware functions that will be executed for specific route parameters. It allows you to perform common operations or validations on route parameters before they are used in route handlers. This is useful for keeping your code DRY (Don't Repeat Yourself) and for ensuring that certain tasks are executed consistently for specific parameters.

Here's how you can use app.param() in Express.js:

`Define the Middleware Function:` First, you define a middleware function that will be executed for a specific route parameter. This middleware function takes three arguments: req, res, and next, just like regular middleware functions in Express.

```js
    app.param('userId', (req, res, next, userId) => {
    // Perform operations or validations on userId
    // For example, you can fetch user data from a database
    // If userId is invalid, you can respond with an error
    // Otherwise, set the user data in the request object for use in route handlers
    // ...
    next();
    });
```

In this example, app.param('userId', ...) specifies that this middleware function should be executed whenever the userId route parameter is encountered in any subsequent route.

`Use the Middleware in Routes:` Once you've defined the app.param() middleware, you can use it in your routes by referencing the parameter name you specified. Express will automatically call the middleware function before executing the route handler.

```js
    app.get('/users/:userId', (req, res) => {
    const user = req.user; // Access the user data set by the app.param() middleware
    // Use the user data in your route handler
    // ...
    });
```

In this route, when a request is made to /users/:userId, the app.param() middleware for userId will be called first to perform any necessary operations or validations on the userId. Then, the route handler will have access to the processed data.

Using app.param() can help you centralize common parameter-related logic, making your code more maintainable and ensuring consistency in how route parameters are handled throughout your Express.js application.

If you have any specific questions or need further clarification on how to use app.param() or any other Express.js concepts, feel free to ask, Boss!

## Query String

Optional Route Parameters: You can make route parameters optional by adding a question mark (?) after the parameter name in the route definition. For example:

```js
    www.example.com/product?category=mobile
    req.query = {"category":"mobile"}
```

In this case, visiting /search would still match the route, and query would be set to 'default'.

## req object

In Express.js, the req object, short for request object, represents the HTTP request that is received by your server when a client makes a request. This object provides information about the incoming request, including details about the client, the requested resource, headers, parameters, and more.

Here are some commonly used properties and methods of the req object in Express:

`req.params:`

An object containing properties mapped to the named route parameters. For example, if you have a route like /users/:id, req.params.id would give you the value of the id parameter.

`req.query:`

An object containing a property for each query string parameter in the route. For example, with a route like /search?q=express, req.query.q would give you the value "express."

`req.body:`

An object containing the parsed request body, available if you're using middleware like express.json() or express.urlencoded() to parse the request body.

`req.method:`

A string representing the HTTP method of the request (e.g., "GET," "POST," "PUT," "DELETE").

`req.url:`

A string representing the URL of the request.

`req.headers:`

An object containing the HTTP headers of the request.

`req.cookies:`

An object containing cookies sent by the client.

`req.ip:`

The IP address of the client making the request.

`req.path:`

The path part of the URL.

`req.hostname:`

The hostname of the request.

`req.protocol:`

The protocol used in the request (e.g., "http" or "https").

`req.get(header):`

A method to get the value of a specific header from the request.
These properties and methods allow you to access various aspects of the incoming request and are essential for processing and handling requests in your Express application. Keep in mind that some properties are populated by middleware, so the presence of certain properties depends on the middleware used in your application.
