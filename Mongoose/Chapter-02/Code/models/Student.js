import mongoose from 'mongoose'


// Creating Schema
const studentSchema = new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,min:18,max:65},
    fees:{type:mongoose.Decimal128,validate:(v)=>{
                return v>=5500.50
            }},
    hobbies:{type:Array},
    isActive:{type:Boolean},
    comments:[{value:{type:String},
    publish:{type:Date}}],
    join:{type:Date,default:Date.now}
})

// Getting info of type
// console.log(studentSchema.path('age'))


// Compiling Schema
const studentModel = mongoose.model('student',studentSchema)