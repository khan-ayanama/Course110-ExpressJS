# Delete Document

## findByIdAndDelete()

It finds a matching document then deletes it.

`Syntax:` findByIdAndDelete(id,options,callback)
id can be object, number or string.

```js
    // Example
    findByIdAndDelete('343csda43sadf')
    findByIdAndDelete({_id:'343csda43sadf'})
```

## deleteOne()

It is used to delete single document. MongoDB will delete only the first document that matches conditions.

`Syntax:` deleteOne(conditions,options,callback)

```js
    // Example:
    deleteOne({_id:'32dfag344dag'})
    deleteOne({_id:'32dfag344dag',age:24})
```

## deleteMany()

It is used to delete multiple document. MongoDB will delete all documents that match conditions

`Syntax:` deleteMany(conditions,options,callback)

```js
    // Example
    deleteMany({age:24})
    deleteMany({name:'Ayan',age:78})
```
