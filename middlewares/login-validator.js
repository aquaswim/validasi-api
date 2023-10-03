const { body } = require("express-validator")

const loginValidator = [
    body("email").notEmpty().isEmail(),
    body("password").notEmpty().isLength({ min: 8 })
];

module.exports = loginValidator;