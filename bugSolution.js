```javascript
// Correct usage of $inc operator with check for field existence
db.collection.updateOne({"_id":ObjectId("someId")},{"$inc":{"field":value}});
```