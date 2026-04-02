// making a class for the router to essentially handle methods, urls and executions
class Router {
    constructor(){
        
        this.routes = []
    }
            // this contains methods, url and response
    register(method, path, handler){
        this.routes.push({method, path, handler})
    }
    // In this we get to handle each of the route objects if we have the method and url
    handle(req, res){
        const {method, url} = req;

        for(const route of this.routes){
            if(route.method === method && route.path === url){
                return route.handler(req, res);
            }
        }
        // 404 fallback incase route not found
    res.statusCode = 404;
    res.end("Not Found");
    }
    
}

export default Router;