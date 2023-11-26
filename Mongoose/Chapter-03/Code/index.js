import express from 'express'
import connectDB from './db/connectDB.js';
import createDoc from './model/Student.js'
const PORT = process.env.PORT||3000;
const DB_URL = process.env.DB_URL||'mongodb://localhost:27017'

const app = express()

connectDB(DB_URL)

// name,age,fees,hobbies,isActive,comments
createDoc()


app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})