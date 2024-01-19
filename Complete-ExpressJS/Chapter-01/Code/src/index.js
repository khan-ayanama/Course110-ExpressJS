const express = require("express");
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.write("<h1>Hello World!!</h1>");
  res.write("<form method='post'>");
  res.write('<input type="text" placeholder="name" name="name">');
  res.write("<input type='submit' value='Submit'>");
  res.write("</form>");
  res.end();
});

app.post("/", (req, res) => {
  console.log("Received data:", req.body.name);
  res.send(`<h1>Data received: ${req.body.name}</h1>`);
});

app.listen(3000, () => {
  console.log(`Server is running at 3000!`);
});
