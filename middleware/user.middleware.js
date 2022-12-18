const userDb = require('../dataBase/users');
const ErrorApi = require('../error/errorAPI')

module.exports = {
    checkIsUserExist: (req, res, next) => {

        try {
            const { userId } = req.params;
            const user = userDb[userId];

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
