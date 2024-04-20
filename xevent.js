const express = require("express");
const EventEmmiter = require("events");

const app = express();
const event = new EventEmmiter();

let count = 0;
event.on("count api",()=>{
    count++;
    console.log("Event called",count)
})

app.get("/",(req,resp)=>{
    resp.send("event called")
    event.emit("count api")
})

app.get("/search",(req,resp)=>{
    event.emit("count api")
    
    resp.send("event called")
})

app.get("/update",(req,resp)=>{
    event.emit("count api")
    resp.send("event called")
})

app.listen(8080);