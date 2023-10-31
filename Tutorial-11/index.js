import express from 'express'
import connectDB from './db/connectdb.js'
import createDoc from './models/Student.js'

const app = express()

const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL||'mongodb://localhost:27017'

connectDB(DATABASE_URL)
createDoc()

app.listen(port,()=>{
    console.log('Server started successfully!!')
})