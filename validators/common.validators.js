const Joi = require("joi");
const {MONGO_ID} = require("../config/regex.enamp");

module.exports = {
    idValidator: Joi.string().regex(MONGO_ID)
};
