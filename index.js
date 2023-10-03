const express = require("express")
const {body, validationResult} = require("express-validator")

const errorHandlerMiddleware = require('./middlewares/error-handler')
const registerValidator = require('./middlewares/register-validator')
const loginValidator = require('./middlewares/login-validator')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    // ini namanya middleware
    console.log("Hello world")
    next()
})

app.post("/auth/register-v2",
    registerValidator,
    (req, res) => {
        validationResult(req).throw()

        console.log(req.body)
        res.json({ message: "test register" })
    })

app.post("/auth/login-v2",
    loginValidator,
    (req, res) => {
        // const result = validationResult(req);
        // if (!result.isEmpty()) {
        //     // validasi gagal
        //     return res.status(400).json({ message: "validation error", detail: result.array() })
        // }
        validationResult(req).throw()
        console.log(req.body)
        res.json({ message: "test login" })
    })

app.use(errorHandlerMiddleware)

app.listen(1945, ()=> {
    console.log(`app start at http://localhost:1945`)
})