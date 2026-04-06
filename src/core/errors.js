
export const notFound = (req, res)=> {
    res.status(404).json({error: "Not found"})
}

export const handleError = (err, req, res) => {
    console.error(err)
    res.status(500).json({
        error: "Internal server error"
    })
}