# Mongoose

Mongoose provides a straigh-forward, schema-based solution to model your application data.

## Requirement

* Node
* MongoDB

## How to install Mongoose

```js
    npm i mongoose
```

## Connect MongoDB using Mongoose without AUTHENTICATION

`connect():` Mongoose requires a connection to a MongoDB database. You can connect to a locally hosted database with mongoose.connect()

`Syntax:` connect(url, options, callback())

`options:` It's an object passed down to the MongoDB driver's connect() function
`callback:` It's a callback function

1. Create a Database from Compass or mongosh
2. Write code below

`Example:`
```js
    // Connect mongodb without options
    mongooose.connect("mongodb://localhost:2701/schooldb")

    // Connect mongodb with options in mongoose

    const options = {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        user:'geekyshows',
        pass:'merapassword',
        dbName:'schooldb',
        authSource:'schooldb'
    }

    mongooose.connect("mongodb://localhost:2701/schooldb",options)
```

## More optimized way of connecting mongodb with mongoose

```js
    // connectdb.js
    import mongoose from'mongoose'

    const DATABASE_URL = process.env.DATABASE_URL|| "mongodb://localhost:27017/schooldbs"

    // Using Promise
    // const connectDB = () => {
    //     return mongoose.connect(DATABASE_URL)
    //         .then(()=>{
    //             console.log("DB Connected Successfully..")
    //         })
    //         .catch((err)=>{
    //             console.log(err)
    //         })
    // }

    const connectDB = async () => {
        try {
            await mongoose.connect(DATABASE_URL)
            console.log("DB Connected Successfully..")
        } catch (err) {
            console.log(err)
        }
    }

    export default connectDB;

    ---------------------------------------------------------------------------------------------------------

    // index.js
    import express from 'express'
    import connectDB from './db/connectdb.js'

    connectDB();

    const app = express()
    const port = process.env.PORT||'3000'

    app.listen(port,()=>{
        console.log(`Server started at: http://localhost:${port}`)
    })
```

## Connect MongoDB using Mongoose without AUTHENTICATION

### 1. Create user and collection using mongosh

    ```js
        // Create a Database (nameing: schooldbs)
        use schooldbs

        // Creating User
        db.createUser({user:'Ayan',pwd:'123456',roles:[{role:'read',db:'schooldbs'}]})

        // To see a user
        show users

        // Creating collection naming Student
        db.student.insertOne({'name':'Jameel','age':21})

        // Without Authentication we can use db.student.find() but with authentication we can't use without password
    ```

### 2. Enable the Authentication in mongod.cfg file of mongodb

* Also restart the server

### 4.1 Login throuogh mongosh

```js
    mongosh --authenticationDatabase 'schooldbs' -u 'Ayan' -p "123456"
```

### 4.2 Authentication using expressjs

* Authentication in URL:

    ```js
    import express from 'express'
    import connectDB from './db/connectdb.js'

    const DATABASE_URL = process.env.DATABASE_URL|| "mongodb://Ayan:123456@localhost:27017/schooldbs?authSource=schooldbs"

    connectDB(DATABASE_URL);

    const app = express()
    const port = process.env.PORT||'3000'

    app.listen(port,()=>{
        console.log(`Server started at: http://localhost:${port}`)
    })
    ```

* `Authentication by Passing Options`

```js
    // connectdb.js
    import mongoose from'mongoose'

    const connectDB = async (DATABASE_URL) => {
        try {

            const DB_OPTIONS = {
                user:'Ayan',
                pass:'123456',
                dbName:'schooldbs',
                authSource:'schooldbs'
            }

            await mongoose.connect(DATABASE_URL,DB_OPTIONS)
            console.log("DB Connected Successfully..")
        } catch (err) {
            console.log(err)
        }
    }

    export default connectDB;

    // index.js

    ```js
        const DATABASE_URL = process.env.DATABASE_URL|| "mongodb://localhost:27017/schooldbs"
    ```
```

* `NOTE:` If you're using special characters in password or name you've to use UTF encoding for example `@-%40`