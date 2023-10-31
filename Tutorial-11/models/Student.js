import { create } from 'domain'
import mongoose from 'mongoose'

// Creating Schema
const studentSchema = new mongoose.Schema({
    name:{type:String, required:true,trim:true},
    age:{type:Number,requried:true,min:18,max:50},
    fees:{type:mongoose.Decimal128,required:true,validate:v=>v>=5500.50},
    hobbies:{type:Array},
    isActive:{type:Boolean},
    comments:[{value:{type:String},publish:{type:Date, default:Date.now}}],
    join:{type:Date,default:Date.now}
})

// Compiling Schema
const studentModel = mongoose.model('student',studentSchema)

// Creating New Document

const createDoc = async () =>{
    try{
        const studentDoc = new studentModel({
            name:'Naeem',
            age:27,
            fees:7250.52,
            hobbies:['dance','reading'],
            isActive:true,
            comments:[{value:'This is good mongoose'}]
        })
        
        const result = await studentDoc.save()
        console.log(result)
    }catch (error){
        console.log(error)
    }
}

export default createDoc;