# Create Document

```js
    // Defining Schema
    const studentSchema = mongoose.schema({name:String})

    // Compiling Schema
    const StudentModel = mongoose.model('Student', studentSchema)

    // Creating new Document
    const studentDoc = new StudentModel({
        name:'Ayan'
    })

    // Saving Document
    await studentDoc.save()
```

## save()

It is used to save a document by inserting a new document into the database if document isNew is true, or sends an updateOne operation only with the modifications to the database, it does not replace the whold document in the latter case.

It returns undefined if used with callback or Promise otherwise

`Example:`

```js
    // Save with callback
    studentDoc.save((err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
        }
    })

    // Save with Promise
    const result = await studentDoc.save()
    console.log(result)

    // Mongoose validates modified paths before saving. If you set a field to an invalid value, Mongoose will throw an errow when you try to save the documetn
    
    const result = await studentDoc.save({validateBeforeSave:false})
```

## Complete code for creating schema, compiling and saving document

```js
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
            const studentDoc = new studentModel({
                name: 'Ayan',
                age: 21,
                fees: 5999.56,
                hobbies:['new language','pen spinning'],
                isActive:true,
                comments:[{value:'Genius Candidate'}]
            })

            // Saving Document
            const result = await studentDoc.save()
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    export default createDoc;
```

## Inserting One document at time

```js
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


    const createDoc = async (name,age,fees,hobbies,isActive,comments) =>{
        try {
            // Creating Document
            const studentDoc = new studentModel({
                name: name,
                age: age,
                fees: fees,
                hobbies:hobbies,
                isActive:isActive,
                comments:comments
            })

            // Saving Document
            const result = await studentDoc.save()
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    export default createDoc;


    // More optimized way
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
```

## Insert Many

```js
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
```
