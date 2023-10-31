import express from 'express'
import connectDB from './db/connectdb.js'


const DATABASE_URL = process.env.DATABASE_URL|| "mongodb://localhost:27017/schooldbs"

// const DATABASE_URL = process.env.DATABASE_URL|| "mongodb://Ayan:123456@localhost:27017/schooldbs?authSource=schooldbs"


connectDB(DATABASE_URL);

const app = express()
const port = process.env.PORT||'3000'

app.listen(port,()=>{
    console.log(`Server started at: http://localhost:${port}`)
})