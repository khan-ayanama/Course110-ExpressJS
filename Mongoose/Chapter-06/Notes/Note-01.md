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

## All Delete Query

`deleteOne() Method:`
Deletes a single document that matches the specified conditions.

```javascript
    UserModel.deleteOne({ _id: userId }, (err) => {
    if (err) throw err;
    console.log("Document deleted successfully");
    });
```

`deleteMany() Method:`
Deletes all documents that match the specified conditions.

```javascript
    UserModel.deleteMany({ condition }, (err) => {
    if (err) throw err;
    console.log("Documents deleted successfully");
    });
```

`findOneAndDelete() Method:`
Finds a single document and deletes it. Returns the original document by default.

```javascript
    UserModel.findOneAndDelete({ condition }, (err, doc) => {
    if (err) throw err;
    console.log(doc);
    });
```

`findByIdAndDelete() Method:`
Finds a document by its ID and deletes it.

```javascript
    UserModel.findByIdAndDelete(userId, (err, doc) => {
    if (err) throw err;
    console.log(doc);
    });
```

These methods provide flexibility for deleting documents based on your specific requirements. Adjust the conditions according to your needs, and remember to replace UserModel with your actual Mongoose model.
