import http from "http"
import Router from "./router.js"
import Response from "../http/response.js";

const router = new Router();


//Register routes
router.register("GET", "/", (req, res)=> {
    res.send("<h1>Hello this is the homepage</h1>")
})
router.register("GET", "/users", (req, res)=> {
    res.send({users: ["Tom", "Olivia"]})
})
router.register("POST", "/login", (req, res)=> {
    res.status(201).json({message: "Created"})
})


const server = http.createServer((req, res)=> {
    const response = new Response(res);
    console.log(req.method, req.url)
    router.handle(req, response);
})

server.listen(3000, () => {
  console.log("Server running on port 3000");
});