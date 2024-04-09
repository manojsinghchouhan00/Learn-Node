const express = require('express')
const app = express();
// make a route
app.get("/", (req,resp)=>{
    console.log("Request from browser :-", req.query.name)

resp.send("Hellow this is Home page")

})

app.get("/about", (req,resp)=>{
resp.send("Hellow this is About page")
console.log("Request from browser :-", req.query.name)

})

app.listen(8080)