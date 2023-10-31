# Create or Insert Document using Mongoose in ExpressJS

## save()

It is used to save document by inserting a new document into the database if document.isNew is true, or sends an updateOne operation only with the modification to the database, it doesn not replace whole document.

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

    // Mongoose validates modified paths before saving. If you set to an invalid value. Mongoose will throw an error when you save() that document

    const result = await studentDoc.save({validateBeforeSave:false})
```