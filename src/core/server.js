import http from "http"
import Router from "./router.js"
import Response from "../http/response.js";
import MiddlewareManager from "./middleware.js";
import parseJson from "../http/parser.js";

const router = new Router();
const middleware = new MiddlewareManager()

//register Middlewares

middleware.use((req, res, next)=> {
    req.startTime = Date.now();
    next();
})
//locking middleware
middleware.use((req, res, next)=> {
    if(req.url === "/blocked"){
        res.status(403).send("Forbidden")
        return;
    }
    next()
})


//Register routes
router.register("GET", "/", (req, res)=> {
    res.status(200).send("<h1>Hello this is the homepage</h1>")
})
router.register("GET", "/users", (req, res)=> {
    res.send({users: ["Tom", "Olivia"]})
})
router.register("POST", "/login", (req, res) => {
  res.json({
    message: "Login received",
    data: req.body,
  });
});
router.register("POST", "/nlocked", (req, res)=> {
    res.send("<h1>You should not be seeing this blocked page</h1>")
})


const server = http.createServer( async(req, res)=> {
    const response = new Response(res);
    console.log(req.method, req.url)
    if(req.method === "POST" || req.method === "PUT"){
        try {
            req.body = await parseJson(req)
        } catch (error) {
            return response.status(400).json({error: "Invalid JSON"})
        }
    }

   middleware.run(req, response, ()=> { // run midd;ewares first before final route handle
     router.handle(req, response);
   })
})

server.listen(3000, () => {
  console.log("Server running on port 3000");
});