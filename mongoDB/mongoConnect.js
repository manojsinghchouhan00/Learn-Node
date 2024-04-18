const {MongoClient} = require("mongodb")

const client = new MongoClient("mongodb://localhost:27017")

async function dbConnect(){
   let result = await client.connect()
   let db = result.db("myapp")
   return db.collection("student");
}
module.exports = dbConnect;