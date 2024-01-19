# Routing

## Basic routing

Each route can have one or more handler functions, which are executed when the route is matched.

`Syntax:` app.METHOD(PATH, HANDLER)

```js
// Respond with Hello World! on the homepage:
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Respond to POST request on the root route (/), the application’s home page:
app.post("/", (req, res) => {
  res.send("Got a POST request");
});

// Respond to a PUT request to the /user route:
app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

// Respond to a DELETE request to the /user route:
app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});
```

## Serving Static Files

To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

`Syntax:` express.static(root, [options])

```js
// use the following code to serve images, CSS files, and JavaScript files in a directory named public
// app.use(express.static("public"));
app.use(express.static(path.join(process.cwd(), "public")));

// To use multiple static assets directories, call the express.static middleware function multiple times:
app.use(express.static("public"));
app.use(express.static("files"));

// Virtual Path
app.use("/static", express.static("public"));

// Safer method
const path = require("path");
app.use("/static", express.static(path.join(__dirname, "public")));
```
