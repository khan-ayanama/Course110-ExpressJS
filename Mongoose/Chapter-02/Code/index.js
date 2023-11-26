import express from'express'
import connectDB from './db/connectDB.js';
import './models/Student.js'

const PORT = process.env.PORT||3000;
const DB_URL = process.env.DB_URL|| 'mongodb://localhost:27017'

const app = express()

connectDB(DB_URL)

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}...`)
})