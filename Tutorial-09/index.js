import express from 'express'
import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost:27017/test")
    .then(()=>{
        console.log('connected Successfully..')
    })

const app = express()
const port = process.env.PORT||'3000'

app.listen(port,()=>{
    console.log(`Server started at: http://localhost:${port}`)
})