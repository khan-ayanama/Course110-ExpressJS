import mongoose, { mongo } from "mongoose";

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

// Insert a Single Document
const createDoc = async (name,age,fees,hobbies,isActive,comments) =>{
    try {
        // Creating Document with ongoing object destructuring
        const studentDoc = new studentModel({
            name,age,fees,hobbies,isActive,comments
        })

        // Saving Document
        const result = await studentDoc.save()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}


// Insert Many Document
const createManyDoc = async () =>{
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



// Retrieving All Data
const getAllDoc = async () => {
    const result = await studentModel.find()
    // console.log(result)
    
    result.forEach((item)=>{
        console.log(
            item.name,
            item.age,
            item.fees.toString(),
            item.hobbies[0],
            item.hobbies[1],
            item.comments[0]?.value
        )
    })
}

// Retrieving all data with specific field
const getAllDocSpecificField = async () => {
    // INCLUDING SPECIFIC FIELD
    // const result = await studentModel.find({},'name age')
    // const result = await studentModel.find().select('name age')
    // const result = await studentModel.find().select(['name','age'])
    // const result = await studentModel.find().select({name:1,age:1})

    // EXCLUDING SPECIFIC FIELDS
    // const result = await studentModel.find().select('-name -age')
    // const result = await studentModel.find().select(['-name','-age','-comments'])
    const result = await studentModel.find().select({name:0,age:0})

    console.log(result)
}


// Retrieve a single Document: Returns an object
const getSingleDoc = async () => {
    const result = await studentModel.findById('6563bfa423964d8c8db748d4')
    console.log(result)
}


// Retrieve a single Document with specific field: Returns an object
const getSingleDocSpecificField = async () => {
    const result = await studentModel.findById('6563bfa423964d8c8db748d4','name age')
    console.log(result)
}


// Retrieve Single Document by Field Name: Returns an array
const getSingleDocByField = async () => {
    const result = await studentModel.find({name:'Ayan'})
    console.log(result)
}


export {createDoc,createManyDoc,getAllDoc,getAllDocSpecificField,getSingleDoc,getSingleDocByField};