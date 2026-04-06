
const parseJson= (req)=> {
    return new Promise ((resolve, reject)=> {
        let body = ""

        req.on("data", (chunk)=> {
            body += chunk;
        })

        req.on("end", ()=> {
            if(!body){
                return resolve({})
            }
            try {
                const parsed = JSON.parse(body);
                resolve(parsed)
                
            } catch (error) {
                reject(new Error("Invalid JSON"))
            }
        })
        req.on("error", (err)=> {
            resolve(err)
        })
    })
}

export default parseJson;