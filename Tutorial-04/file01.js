const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    console.log(req.query)
    res.send('<h1>Hello !</h1>')
})

app.listen(3000,()=>{
    console.log('app is runnign at 3000...')
})