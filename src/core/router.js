// Making a class to handle routes by assigning them to methods and url that exist then execute them
class Router{

    constructor(){
        // A list to save the routes for assignment
        this.routes = []
    }

    // A function to register the route parameters
    register(method, path, handler){
        this.routes.push({method, path, handler})
    }

    // A function to assign to routes by looping to the right one and responding 404 if not found

    handle(req, res){
        // deconstruct the req to get params
        const {method, url} = req

        for(const route of this.routes){
            if(route.method == method && route.path === url){
                return route.handler(req, res)
            }
        }
        // 404 fall back
    res.status(404).send("Route not found");

    }

}

export default Router