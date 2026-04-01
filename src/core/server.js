import http from "http"

const server = http.createServer((req, res)=> {
    console.log(req.method, req.url)
    if(req.url === "/"){
        res.end("Hello world")
        return;
    }
    if(req.url === "/users"){
        res.end("No users yet")
    }
    res.end("Route not found")
})

server.listen(3000, ()=> {
    console.log("Server is running on port 3000")
})