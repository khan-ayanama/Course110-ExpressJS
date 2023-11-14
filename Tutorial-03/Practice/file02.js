const express = require('express')

const messageRouter = express.Router()

messageRouter.get('/',(req,res)=>{
    res.send('<h1>Important message, Savdhaan!!</h1>')
})

module.exports = messageRouter;