const express = require('express')
const friendRouter = require('./file01')
const messageRouter = require('./file02')
const aboutRouter = require('./file03')

const app = express()

app.use('/friends',friendRouter)
app.use('/messages',messageRouter)
app.use('/about',aboutRouter)


app.listen(3000,()=>{
    console.log('Server listening at port 3000!!!')
})