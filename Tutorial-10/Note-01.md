# Schema and Model in Express

A document schema is JSON object that allows you to define the shape and content of documents and embedded document in a collection. You can use a schema to requrie a specific set of fields, configure the content of a field, or to validate changes to a document based on its beginning and ending states.

```js
    name:{type:String, required:true,trim:true}
    name:{type:Number, required:true,min:18,max:50}
    fees:{type:mongoose.Decimal128}
    join:{type:Date,default:Date.now}
```

## Defining Scehma

Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents withing that collection.

* By default, Mongoose adds an _id property to your schema

`Example:`

    ```js
        import mongoose from 'mongoose'

        const studentSchema = new mongoose.Schema({
            name:{type:String},
            age:{type:Number},
            fees:{type:mongoose.Decimal128},
            hobbies:{type:Array},
            isactive:{type:Boolean},
            comments:[{value:{type:String,{type:Date}}}]
            join:{type:Date}
        })
    ```

## _id property| (path)

* When you create a new document with the automatically added _id property, Mongoose creates a new _id of type Object to your document.

* ObjectIds encoded the local tiem at which they were created. That means you can usually pull hte time that a document was created from it's _id.

* You can also override Mongoose's default _id with your own _id

* Mongoose will refuse to save a document that doesn't have an _id, you're responsible for setting _id if you define your own _id path

## type Property

type is a special property in Mongoose schemas. When Mongoose finds a nested property named typed in your schema, Mongoose assumesthat it needs to define a SchemaType with the given type.

`Example:` String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array, Decimal128, Map, Schema

## All Schema Types

`required:` boolean or function, if true adds a requried validator for this property
`default`: Any or function, sets a default value for the path. If the value is a function, the return value of the function is used as the default.
`select:` boolean, spedifies default projection for queries.
`validate:` function, adds a validator function for this property
`get:` function, defines a custom getter for this property usign Object.defineProperty()
`set:`
`alias:`

## schema.path()

The schema.path() function returns the instantiated schema type for a given path
`Example:` studentSchema.path('age')

## Model

Model are fancy constructors compiled from schema definations. An instance of a model is called a document.
Models are repsonsible for creating and reading documents from the underlying MongoDB database.

### Compiling Schema

```js
    const studentSchema = mongoose.schmea({})

    const Student = mongoose.model('Student',studentSchema)
```

The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, loweredcase version of your model name. Thus, for the example above, teh model Student is for the student collection in the database.

### Create Document using Model

```js
    // Defining Schema
    const studentSchema = mongoose.schema({name:String})

    // Compiling Schema
    const Student = mongoose.model('Student',studentSchema)

    // Creating Document
    const stud = new Student({
        name:'Ayan'
    })

    // Saving Document
    await stud.save()
```