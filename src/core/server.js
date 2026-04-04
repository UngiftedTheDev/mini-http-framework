import http from "http"
import Router from "./router.js"
import Response from "../http/response.js";
import MiddlewareManager from "./middleware.js";

const router = new Router();
const middleware = new MiddlewareManager()

//register Middlewares
//locking middleware
middleware.use((req, res, next)=> {
    if(req.url === "/blocked"){
        res.status(403).send("Forbidden")
        return;
    }
    next()
})

middleware.use((req, res, next)=> {
    req.startTime = Date.now();
    next();
})

//Register routes
router.register("GET", "/", (req, res)=> {
    res.status(200).send("<h1>Hello this is the homepage</h1>")
})
router.register("GET", "/users", (req, res)=> {
    res.send({users: ["Tom", "Olivia"]})
})
router.register("POST", "/login", (req, res)=> {
    res.status(201).json({message: "Created"})
})
router.register("POST", "/nlocked", (req, res)=> {
    res.send("<h1>You should not be seeing this blocked page</h1>")
})


const server = http.createServer((req, res)=> {
    const response = new Response(res);
    console.log(req.method, req.url)

   middleware.run(req, response, ()=> { // run midd;ewares first before final route handle
     router.handle(req, response);
   })
})

server.listen(3000, () => {
  console.log("Server running on port 3000");
});