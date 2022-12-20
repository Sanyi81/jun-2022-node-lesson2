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
    }
}
