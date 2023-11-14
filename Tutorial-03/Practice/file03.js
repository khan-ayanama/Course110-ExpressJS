const express = require('express')

const aboutRouter = express.Router()

aboutRouter.get('/',(req,res)=>{
    res.send('<h1>This is about the group frieeends!!</h1>')
})

module.exports = aboutRouter;