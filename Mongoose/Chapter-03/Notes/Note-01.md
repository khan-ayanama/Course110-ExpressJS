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

It is used to save a document by inserting a new document into the database if document isNew is true, or sends an updateOne operation only with the modifications to the database, it does no replace the whold document in the latter case.

It returns undefined if used with callback or Promise otherwise

`Example:`

```js
    studentDoc.save((err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
        }
    })

    const result = await studentDoc.save()
    console.log(result)

    // Mongoose validates modified paths before saving. If you set a field to an invalid value, Mongoose will throw an errow when you try to save the documetn
    
    const result = await studentDoc.save({validateBeforeSave:false})
```
