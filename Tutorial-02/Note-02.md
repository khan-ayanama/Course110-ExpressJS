# First Express JS Application

```js
// Importing Express
const express = require("express");
const app = express();

const port = process.env.PORT || "3000";

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
```

- `express():` It is top level function exported by the express module
- `const app = express():` The app returned by express() is in fact a JS function, designed to be passed to Nodejs HTTP server as callback to handle request.
  This makes easy to provide both HTTP and HTTPS version of your app with the same code base, as the app does not inherit from these.
- `app.listen():` It binds and listens for connections on the specified host and port. If port is omitted or is 0, the operating system will assign an arbitrary unused port, which is useful for cases like automated tasks.
