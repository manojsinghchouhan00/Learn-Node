const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/myapp")
const express =require("express")

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    city: String
})
let studentModel = mongoose.model("studentdata", studentSchema)

const app = express();
app.use(express.json())

app.get("/home", async (req,resp)=>{
    let data = await studentModel.find({})
    // console.log("first")
    resp.send(data)
})
app.get("/home/:_id", async (req,resp)=>{
    console.log(req.params)
    let data = await studentModel.find(req.params)
    // console.log("first")
    resp.send(data)
})

app.post("/home", async (req,resp)=>{
    let data = new studentModel(req.body)
    data = await data.save()
    // console.log("first")
    resp.send(data)
})
app.listen(8080)