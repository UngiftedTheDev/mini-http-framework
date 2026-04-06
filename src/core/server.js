import http from "http"
import Router from "./router.js"
import Response from "../http/response.js";
import MiddlewareManager from "./middleware.js";
import parseJson from "../http/parser.js";
import { notFound, handleError } from "./errors.js";
import App from "./app.js";

const app = new App()

//middleware
app.use((req, res, next)=> {
    console.log(`${req.method} ${req.url}`)
    if(req.url === "/blocked"){
        res.status(403).json({message: "Unauthorized"})
        return
    }
    next()
})

//routes

app.get("/home", (req, res)=> {
    res.send("<h1> Welcome to the Homepage </h1>")
})

app.get("/blocked", (req, res)=> {
    res.send("You should not be seeing this")
})
app.post("/login", (req, res)=> {
    res.json({
        body: req.body
    })
})
 app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});


app.listen(3000)