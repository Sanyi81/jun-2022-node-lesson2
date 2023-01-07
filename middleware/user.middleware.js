const User = require('../dataBase/User');
const ErrorApi = require('../error/errorAPI');
const commonValidator = require('../validator/common.validators');
const userValidator = require('../validator/user.validator');

module.exports = {
    getUserDynamically: (fieldName, from = 'body', dbField) => async (req, res, next) => {
        try {
            const fieldToSearch = req[from][fieldName];

            const user = await User.findOne({ [dbField]: fieldToSearch });

            if (!user) {
                throw new ErrorApi('User is not found', 404);
            }

            req.user = user;

            next();
        } catch (e) {
            next(e);
        }
    },

    checkIsEmailUnique: async (req, res, next) => {
        try {
            const { email } = req.body;

            if (!email) {
                throw new ErrorApi('Email is not present', 400);
            }

            const user = await User.findOne({ email });

            if (user) {
                throw new ErrorApi('User with email already exists', 409);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isNewUserValid: async (req, res, next) => {
        try {
            let validate = userValidator.newUserValidator.validate(req.body);

            if (validate.error) {
                throw new ErrorApi(validate.error.message, 400)
            }

            req.body = validate.value;

            next();
        } catch (e) {
            next(e);
        }
    },

    isEditUserValid: async (req, res, next) => {
        try {
            let validate = userValidator.editUserValidator.validate(req.body);

            if (validate.error) {
                throw new ErrorApi(validate.error.message, 400)
            }

            req.body = validate.value;

            next();
        } catch (e) {
            next(e);
        }
    },

    isUserIdValid: async (req, res, next) => {
        try {
            const { userId } = req.params;

            const validate = commonValidator.idValidator.validate(userId);

            if (validate.error) {
                throw new ErrorApi(validate.error.message, 400)
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
