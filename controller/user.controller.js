const User = require("../dataBase/User");
const oauthService = require("../sevice/oauth.service");

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const users = await User.find();

            res.json(users);
        } catch (e) {
            next(e)
        }
    },

    getUserById: (req, res, next) => {
        try {
            res.json(req.user);
        } catch (e) {
            next(e)
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const newUserInfo = req.body;
            const userId = req.params.userId;

            await User.findByIdAndUpdate(userId, newUserInfo);

            res.json('updated')
        } catch (e) {
            next(e)
        }
    },

    createUser: async (req, res, next) => {
        try {
            const hashPassword = await oauthService.hashPassword(req.body.password);

            await User.create({ ...req.body, password: hashPassword });

            res.status(201).json('OK')
        } catch (e) {
            next(e);
        }
    },

    deleteUserById: async (req, res, next) => {
        try {
            await User.deleteOne({ id: req.params.userId });

            res.status(204).send('OK')
        } catch (e) {
            next(e);
        }
    }
};


