const { body } = require("express-validator")

const registerValidator = [
    body("nama").notEmpty(),
    body("email").notEmpty().isEmail(),
    body("password").notEmpty().isLength({ min: 8 })
];

module.exports = registerValidator;