const express = require("express")
require("./xconfig")
const student = require("./xyzModel")

const app = express();
app.use(express.json())  // parse body

app.get("/", async (req, resp) => {
    let data = await student.find()
    resp.send(data)
})

app.post("/", async (req, resp) => {
    let data = new student(req.body)
    data = await data.save()
    resp.send(data)
})

app.put("/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await student.updateOne(
        req.params, { $set: req.body }
    )
    resp.send(data)
})

app.delete("/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await student.deleteOne(req.body)
    resp.send(data)
})


app.get("/search/:key", async (req, resp) => {
    let data = await student.find({
        $or:[
            {"name" : {$regex:req.params.key}},
            {"city" : {$regex:req.params.key}}
        ]
    })
    resp.send(data)
})

app.listen(8080);


// { type: String, required: true, unique: true }