const express = require('express')

const app = express()


app.get("/", (req, resp) => {
    resp.sendFile("<h1>Welcome to home js</h1>")
  })

  app.get("/user", (req, resp) => {
    resp.sendFile("<h1>Welcome to user js</h1>")
  })