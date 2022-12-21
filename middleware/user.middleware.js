const User = require('../dataBase/User');
const ErrorApi = require('../error/errorAPI')

module.exports = {
    checkIsUserExist: async (req, res, next) => {
        try {
            const {userId} = req.params;
            const user = await User.findById[userId];

            if (!user) {
                throw new ErrorApi('User not found', 404);
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
                throw new ErrorApi('Email not present', 400);
            }

            const user = await User.findOne({ email });

            if (user) {
                throw new ErrorApi('User with email already exists', 409);
            }

            req.user = user;

            next();
        } catch (e) {
            next(e);
        }
    }
}
