```javascript
// Incorrect usage of $inc operator for updating a field in MongoDB
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{field:value}});
```