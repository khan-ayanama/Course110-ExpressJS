# Retrieve Document

## find()

The find() method returns all occurences in the selection.

`Syntax:` find(filter_object, projection_object, options_object, callback)

```js
    // Example:-
    await Student.Model.find({name:'Ayan'}{name:1,age:1},{skip:5})
```
