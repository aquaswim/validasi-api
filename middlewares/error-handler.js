const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err)
    return res.status(400).json({message: "Validation Error", detail: err})
}

module.exports = errorHandlerMiddleware