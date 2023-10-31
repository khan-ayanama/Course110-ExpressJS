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
