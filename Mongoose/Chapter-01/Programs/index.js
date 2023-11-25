import express from 'express'
import connectDB from './db/connectDb.js';

const port = process.env.PORT || 3000;
const DATABASE_URL = "mongodb://localhost:27017/schooldb";

const app = express()

connectDB(DATABASE_URL)


app.listen(port,()=>{
    console.log(`Server running at ${port}..`)
})