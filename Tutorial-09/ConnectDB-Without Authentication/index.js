import express from 'express'
import connectDB from './db/connectdb.js'

connectDB();

const app = express()
const port = process.env.PORT||'3000'

app.listen(port,()=>{
    console.log(`Server started at: http://localhost:${port}`)
})