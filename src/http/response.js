// Making a reponse class to allow for flexibility in using response like express
class Response{

    constructor(res){
        this.res = res
    }

    status(code){
        this.res.statusCode = code;
        return this; // this enables chaining
    }

    send(data){
        if(typeof data === "object"){
            this.res.header("Content-Type", "application/json")
            this.res.end(JSON.stringify(data))
        }else {
            this.res.end(data)
        }   
    }
    json(data){
        this.res.header("Content-Type", "application/json")
        this.res.end(JSON.stringify(data))
    }

}

export default Response