const Joi = require("joi");

const regexp = require("../config/regex.enamp");

module.exports = {
    loginValidator: Joi.object({
        email: Joi.string().regex(regexp.EMAIL).lowercase().trim(),
        password: Joi.string().regex(regexp.PASSWORD).required(),
    })
}
