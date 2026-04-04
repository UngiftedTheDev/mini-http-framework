class MiddlewareManager{

    constructor(){
        this.middlewares = [];
    }

    use(fn){
        this.middlewares.push(fn); // this registers the middleware functions to be executed
    }

    run(req, res, done){

        let index = 0;
        const next = ()=> { // this next function executes the mifflewares in order and increments them until they are all finished
            if(index >= this.middlewares.length){
                return done(); // this gives control back to the router;
            }

            const middleware = this.middlewares[index++]; // run the immediate one the increment
            middleware(req, res, next);
        }
        next(); // this let's he function run again

    }

}

export default MiddlewareManager;