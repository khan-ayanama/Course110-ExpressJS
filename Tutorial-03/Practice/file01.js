// const express = require("express");
// const app = express();

// const cb1 = (req, res, next) => {
//   console.log("First Callback");
//   next();
// };
// const cb2 = (req, res, next) => {
//   console.log("Second Callback");
//   next();
// };
// const cb3 = (req, res, next) => {
//   console.log("Third Callback");
//   res.send('<h2>Response from third callback</h2>')
// //   next();
// };

// app.get("/",[cb1,cb2,cb3], (req, res, next) => {
//   res.send("<h1>Hello World!</h1>");
// });

// const express = require("express");
// const app = express();

// app
// .route('/')
// .all((req,res,next)=>{
//         res.send('<h2>Respond from all!</h2>')
//         next()
//     })
// .get((req,res)=>{
//     console.log("heelo from get")
//     res.send("<h1>Respond for get request</h1>")
// })

// app.listen(3000, () => {
//   console.log("Server is running at port 3000...");
// });


// USING APP ROUTER

const express = require('express')

const friendRouter = express.Router()

friendRouter.get('/',(req,res)=>{
    res.send('<h1>Hello Friends!!</h1>')
})

module.exports = friendRouter;
