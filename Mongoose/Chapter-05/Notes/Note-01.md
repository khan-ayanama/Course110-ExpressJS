# Update Document

Each model has its own update method for modifying documents in the database without returning them to your application

## findByIdAndUpdate()

It finds a matching document, updates it according to the update arg, passing any options, and returns the found document (if any) to the callback. The query executes if callback is passed.

`Syntax:` findByIdAndUpdate(id, update,options,callback)

id can be object, number or string.

```js
    // Examples
    findByIdAndUpdate('32fdasdf34',{name:"Ayan"},{returnDocument:after})
    findByIdAndUpdate('32fdasdf34',{$set:{name:"Ayan"}},{returnDocument:after})
```

## updateOne()

It is used to update single document. MongoDB will update only the first document that matches filter regardless of the value of the multi option.

`Syntax:` updateOne(filter,update,options,callback)

```js
    // Example
    updateOne({_id:'331345drf'},{name:'Ayan'},{upsert:true})
```

`upsert:` if true, an no documents found, inserts new document

## updateMany()

It is used to u pdate multiple document. MongoDB will  update all documents that match filter regardless of the value of the multi option.

`Syntax:` updateMany(filter,update,options,callback)

```js
    // Example
    updateMany({age:27},{name:'Ayan'},{upsert:true})
```

## All Methods of Updating

In Mongoose, you can update documents in various ways using different methods. Here are some common methods for updating documents:

`updateOne() method:`

Updates a single document that matches the specified conditions.

```javascript
    UserModel.updateOne({ _id: userId }, { $set: { field: 'new value' } }, (err, result) => {
    if (err) throw err;
    console.log(result);
    });
```

`updateMany() method:`

Updates all documents that match the specified conditions.

```javascript
    UserModel.updateMany({ condition }, { $set: { field: 'new value' } }, (err, result) => {
    if (err) throw err;
    console.log(result);
    });
```

`findOneAndUpdate() method:`
Finds a single document and updates it. Returns the original document by default.

```javascript
    UserModel.findOneAndUpdate({ condition }, { $set: { field: 'new value' } }, (err, doc) => {
    if (err) throw err;
    console.log(doc);
    });
```

`findByIdAndUpdate() method:`
Finds a document by its ID and updates it.

```javascript
    UserModel.findByIdAndUpdate(userId, { $set: { field: 'new value' } }, (err, doc) => {
    if (err) throw err;
    console.log(doc);
    });
```

`Using Options:`
You can use additional options such as { new: true } to return the modified document instead of the original.

```javascript
    UserModel.findOneAndUpdate({ condition }, { $set: { field: 'new value' } }, { new: true }, (err, doc) => {
    if (err) throw err;
    console.log(doc);
    });
```

`{ upsert: true }` can be used to create the document if it doesn't exist.

```javascript
    UserModel.findOneAndUpdate({ condition }, { $set: { field: 'new value' } }, { upsert: true }, (err, doc) => {
    if (err) throw err;
    console.log(doc);
    });
```

Remember to replace UserModel with your actual Mongoose model, and adjust the conditions and update values as needed
