const userDb = require("../dataBase/users");

module.exports = {
    getAllUsers: (req, res, next) => {
        try {
            res.json(userDb);
        } catch (e) {
            next(e)
        }
    },

    getUserById: (req, res, next) => {
        try {
            throw new Error('What?');

            res.json(req.user);
        } catch (e) {
            next(e)
        }
    },

    updateUser: (req, res, next) => {
        try {
            const newUserInfo = req.body;
            const userId = req.params.userId;

            userDb[userId] = newUserInfo;

            res.json('updated')
        } catch (e) {
            next(e)
        }
    }
};
