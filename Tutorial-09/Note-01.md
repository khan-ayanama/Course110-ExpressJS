# Mongoose

Mongoose provides a straigh-forward, schema-based solution to model your application data.

## Requirement

* Node
* MongoDB

## How to install Mongoose

```js
    npm i mongoose
```

## Connect MongoDB using Mongoose

`connect():` Mongoose requires a connection to a MongoDB database. You can connect to a locally hosted database with mongoose.connect()

`Syntax:` connect(url, options, callback())

`options:` It's an object passed down to the MongoDB driver's connect() function
`callback:` It's a callback function

`Example:`
```js
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