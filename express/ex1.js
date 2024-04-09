const express = require("express")
const path = require("path")

const app = express()
const publicPath = path.join(__dirname,"newFolder")
console.log(publicPath)

app.use(express.static(publicPath))


// app.get("/" , (req,resp)=>{
// resp.send("I am daya")
// })

app.listen(8080)