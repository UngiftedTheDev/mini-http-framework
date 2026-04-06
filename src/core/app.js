import parseJson from "../http/parser.js";
import { handleError, notFound } from "./errors.js";
import MiddlewareManager from "./middleware.js";
import Router from "./router.js";
import http from "http"
import Response from "../http/response.js";
class App{
    constructor(){
        this.router = new Router(); // routing
        this.middleware = new MiddlewareManager() // middleware
    }

    use(fn){
        this.middleware.use(fn) 
    }
    get(path, handler){
        this.router.register("GET", path, handler);
    }
    post(path, handler){
        this.router.register("POST", path, handler)
    }

    listen(port){ // this part abstracts the whole server to keep the server.js file clean.
        const server = http.createServer(async(req, res)=> {
            const response = new Response(res)
            console.log(`${req.method}, ${req.url}`)
            try {
               if(req.method === "POST" || req.method === "PUT"){
                try {
                    req.body = await parseJson(req)
                } catch (error) {
                    return response.status(400).json({error: "Invalid JSON"})
                }
               }
               this.middleware.run(req, response, ()=> {
                    const result = this.router.handle(req, response);
                    if(result === null){
                        return notFound(req, response)
                    }
               })

            } catch (error) {
                handleError(error, req, response)
            }


        })
    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
    }


}

export default App