const authValidator = require("../validator/auth.validator");
const ErrorAPI = require("../error/errorAPI");
module.exports = {
    isBodyValid: async (req, res,next) => {
        try {
           const validate = authValidator.loginValidator.validate(req.body);

           if (validate.error) {
               throw new ErrorAPI(validate.error.message);
           }

            next();
        } catch (e) {
            next(e);
        }
    },

    isBodyValid: async (req, res,next) => {
        try {
            const validate = authValidator.loginValidator.validate(req.body);

            if (validate.error) {
                throw new ErrorAPI(validate.error.message);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
}