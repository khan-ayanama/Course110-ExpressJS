import mongoose from "mongoose";

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

// Compiling Schema
const studentModel = mongoose.model('student',studentSchema)


const createDoc = async () =>{
    try {
        // Creating Document
        const GauravDoc = new studentModel({
            name: 'Gaurav',
            age: 21,
            fees: 5999.56,
            hobbies:['new language','pen spinning'],
            isActive:true,
            comments:[{value:'Genius Candidate'}]
        })
        const AnujDoc = new studentModel({
            name: 'Anuj',
            age: 21,
            fees: 5999.56,
            hobbies:['new language','pen spinning'],
            isActive:true,
            comments:[{value:'Genius Candidate'}]
        })
        const MisbahDoc = new studentModel({
            name: 'Misbah',
            age: 21,
            fees: 5999.56,
            hobbies:['new language','pen spinning'],
            isActive:true,
            comments:[{value:'Genius Candidate'}]
        })

        // Saving Document
        const result = await studentModel.insertMany([GauravDoc,AnujDoc,MisbahDoc])
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

export default createDoc;