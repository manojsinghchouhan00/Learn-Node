const express = require("express");
const mongodb = require("mongodb");
const dbConnect = require("./mongoConnect");

let app = express();
//  get api 
app.get("/", async (req, resp) => {
    let data = await dbConnect()
    data = await data.find({}).toArray();
    resp.send(data)
})

app.get("/:id", async (req, resp) => {
    let data = await dbConnect()
    data = await data.find({ _id: new mongodb.ObjectId(req.params.id)}).toArray();
    resp.send(data)
})

// post api 
app.use(express.json()) //  body parser (middleware)
app.post("/", async (req, resp) => {
    let data = await dbConnect();
    data = await data.insertOne(req.body);
    console.log("data :",data)
    resp.send(data);
})

app.put("/:pid", async (req, resp) => {
    console.log(req.params)
    console.log(req.body)
    let data = await dbConnect();
    // data = await data.updateOne({_id : req.params.pid},{$set : req.body});
    data = await data.updateOne({ _id: new mongodb.ObjectId(req.params.pid) }, { $set: req.body });
    resp.send(data);
})

app.delete("/:id", async (req, resp) => {
    let data = await dbConnect();
    data = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    resp.send(data);
})
app.listen(8080)