const express = require('express')

const app = express();
const route = express.Router();

const reqFilter = (req, resp, next) => {
   console.log("Require filter ");
   if (!req.query.age) {
      resp.send("Please provide age")
   }else if(req.query.age<18){
      resp.send("You are not access my page")
   } else {
      next();
   }
}

route.use(reqFilter)

route.get("/", (req, resp) => {
   resp.send("I am home page")
})

route.get("/about", (req, resp) => {
   resp.send("I am About page")
})
app.get("/team", (req, resp) => {
   resp.send("I am Team page")
})
app.get("*",route)
app.listen(8080)