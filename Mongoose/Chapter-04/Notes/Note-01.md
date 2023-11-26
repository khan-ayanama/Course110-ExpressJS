# Retrieve Document

## find()

The find() method returns all occurences in the selection.

`Syntax:` find(filter_object, projection_object, options_object, callback)

```js
    // Example:-
    await Student.Model.find({name:'Ayan'}{name:1,age:1},{skip:5})
```

## Retrieving all Data

```js
// Retrieving Data: Returns an array of document
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


export {getAllDoc};
```

## Retrieving Specific Fields

```js
    // Retrieving all data with specific field: Returns an array of documents
    const getAllDocSpecificField = async () => {

        // INCLUDING SPECIFIC FIELD
        const result = await studentModel.find({},'name age')
        const result = await studentModel.find().select('name age')
        const result = await studentModel.find().select(['name','age'])
        const result = await studentModel.find().select({name:1,age:1})




        // EXCLUDING SPECIFIC FIELDS
        const result = await studentModel.find().select('-name -age')
        const result = await studentModel.find().select(['-name','-age','-comments'])
        const result = await studentModel.find().select({name:0,age:0})

        console.log(result)
    }
```

## Retrieving a Single Document

```js
    // Retrieve a single Document: Returns an object
    const getSingleDoc = async () => {
        const result = await studentModel.findById('6563bfa423964d8c8db748d4')
        console.log(result)
        console.log(result.name)
        console.log(result._id.getTimeStamp())
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


    // Retrieve Specific field of  Single Document by Field Name: Returns an array
    const getSpecificFieldBySingleDocByField = async () => {
        const result = await studentModel.find({name:'Ayan'}).select('name age')
        console.log(result)
    }
```

## Get Limited Document

```js
    // Limit the number of document
    const getLimitedDoc = async () => {
        const result = await student.Model.find().limit(4)
        const result = await student.Model.find({},null,{limit:4})
        console.log(result)
    }
```

## Skip Document

```js
    // skip the document
    const skipDoc = async () => {
        const result = await student.Model.find().skip(4)
        const result = await student.Model.find({},null,{skip:4})
        console.log(result)
    }
```

## Count Document

```js
    // Count the document
    const countDoc = async () => {
        const result = await student.Model.find().countDocuments()
        
        console.log(result)
    }
```

## Sort Documents

```js
    // Sort the document
    const skipDoc = async () => {
        const result = await student.Model.find().sort(age:1)
        const result = await student.Model.find({},null,{age:-1})
        console.log(result)
    }
```

## Comparison Query Operator

`Equality:`

`{ field: value }:` Matches documents where the field is equal to the specified value.

`Not Equal:`

`{ field: { $ne: value } }:` Matches documents where the field is not equal to the specified value.

`Greater Than:`

`{ field: { $gt: value } }:` Matches documents where the field is greater than the specified value.

`Greater Than or Equal To:`

`{ field: { $gte: value } }:` Matches documents where the field is greater than or equal to the specified value.

`Less Than:`

`{ field: { $lt: value } }:` Matches documents where the field is less than the specified value.

`Less Than or Equal To:`

`{ field: { $lte: value } }:` Matches documents where the field is less than or equal to the specified value.

`In Array:`

`{ field: { $in: [value1, value2, ...] } }:` Matches documents where the field is equal to any value in the specified array.

`Not In Array:`

`{ field: { $nin: [value1, value2, ...] } }:` Matches documents where the field is not equal to any value in the specified array.

`Existence:`

`{ field: { $exists: true/false } }:` Matches documents where the field exists or does not exist.

```js
    // Comparing Document field and getting doc
    const compareDoc = async () => {
        const result = await studentModel.findd({age:{$gt:25}})
        const result = await studentModel.findd({age:{$gte:25}})
        const result = await studentModel.findd({age:{$lt:25}})
        const result = await studentModel.findd({age:{$lte:25}})
        const result = await studentModel.findd({age:{$in:[25,21]}})
        const result = await studentModel.findd({age:{$nin:[25,21]}})
    }
```

## Logical Query Operator

 In Mongoose, you can use logical query operators to perform complex queries. Here are some common ones:

`Logical AND:`

You can use an implicit AND by specifying multiple conditions in the query object.

```javascript
    UserModel.find({ $and: [{ condition1 }, { condition2 }] }, (err, users) => {
    if (err) throw err;
    console.log(users);
    });
```

Or you can use the shorthand notation without $and:

```javascript
    UserModel.find({ condition1, condition2 }, (err, users) => {
    if (err) throw err;
    console.log(users);
    });
```

`Logical OR:`

Use $or to find documents that match at least one of the specified conditions.

```javascript
    UserModel.find({ $or: [{ condition1 }, { condition2 }] }, (err, users) => {
    if (err) throw err;
    console.log(users);
    });
```

`Logical NOT:`

Use $not to negate a condition.

```javascript
    UserModel.find({ field: { $not: { $eq: value } } }, (err, users) => {
    if (err) throw err;
    console.log(users);
    });
```

`Combining AND, OR, and NOT:`

You can also combine these operators to create more complex queries.

```javascript
    UserModel.find({
    $and: [
        { field1: value1 },
        { $or: [{ field2: value2 }, { field3: value3 }] },
        { field4: { $not: { $eq: value4 } } }
    ]
    }, (err, users) => {
    if (err) throw err;
    console.log(users);
    });
```
