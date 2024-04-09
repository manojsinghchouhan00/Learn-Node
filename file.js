const express = require('express')
const path = require('path')

const app = express()

const publicpath = path.join(__dirname, "makeFolder")

// app.use(express.static(publicpath));

app.get("/home", (req, resp) => {
  resp.sendFile(`${publicpath}/home.html`)
})

app.get("/about", (req, resp) => {
  resp.sendFile(`${publicpath}/about.html`)
})

app.get("/title", (req, resp) => {
  resp.sendFile(`${publicpath}/title.html`)
})
app.listen(8080);