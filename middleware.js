const express = require("express")
const app = express();
const route = express.Router();


const requireFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please provide age")
    } else if (req.query.age < 18) {
        resp.send("You can't access my web page")
    } else {
        next()
    }
    console.log("reuest filter")
}
route.use(requireFilter);


route.get("/",requireFilter, (req, resp) => {
    resp.send("Welcome to Home page")
})

route.get("/user", (req, resp) => {
    resp.send("Welcome to User page")
})

app.get("/about", (req, resp) => {
    resp.send("Welcome to About page");
})
app.get("*",route);
app.listen(8080)