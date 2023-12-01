import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
dotenv.config()

import connectDB from './config/connectDB.js'

const port = process.env.PORT
const DB_URL = process.env.DB_URL

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Connecting Database
connectDB(DB_URL)

// Load Routs
app.use("/api/user",userRoutes)

app.listen(port,()=>{
    console.log(`Server is running at ${port}...`)
})

