import express from 'express'
import connectDB from './db/connectDB.js';
import web from './routes/web.js'

const app = express()
const port = 3000;
const DB_URL = 'mongodb://localhost:27017'

connectDB(DB_URL)

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

app.use('/',web)

app.listen(port,()=>{
    console.log(`Server is running at ${port}...`)
})