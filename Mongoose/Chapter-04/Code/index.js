import express from'express'
import connectDB from './db/connectDB.js';
import { createDoc,createManyDoc ,getAllDoc, getAllDocSpecificField,getSingleDoc, getSingleDocByField} from './model/Student.js';

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017'

const app = express()
connectDB(DB_URL)


//  name,age,fees,hobbies,isActive,comments
// createDoc('Narendra',63,87483.3,['politics','divorce'],true,[{value:'Mitron!!'}])
// createManyDoc()

// Retrieving Data
// getAllDoc()
// getAllDocSpecificField()
// getSingleDoc()
getSingleDocByField()

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})