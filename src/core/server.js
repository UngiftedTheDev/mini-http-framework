import http from "http"
import Router from "./router.js"

const router = new Router()

// Register routes
router.register("GET", "/", (req, res)=> {
    res.end(`<h1> Home Page </h1>`)
})
router.register("GET", "/users", (req, res)=> {
    res.end(`<h1> Users Page </h1>`)
})
router.register("POST", "/login", (req, res)=> {
    res.end(`<h1> Login Page </h1>`);
})

const server = http.createServer((req, res)=> {
    console.log(req.method, req.url)
    router.handle(req, res);
})

server.listen(3000, () => {
  console.log("Server running on port 3000");
});