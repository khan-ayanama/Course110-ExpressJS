import express from 'express'
import cookieParser from 'cookie-parser';
import web from './routes/web.js'


const PORT = 3000;
const app = express()

// Middleware Cookieparser
app.use(cookieParser())
app.use('/',web)

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})