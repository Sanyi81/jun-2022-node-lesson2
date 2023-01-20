const User = require("../dataBase/User");
const s3Service = require("../service/s3.service");
const {userRepository} = require("../repository");

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const users = await userRepository.find(req.query);

            res.json(users);
        } catch (e) {
            next(e);
        }
    },

    getUserById: (req, res, next) => {
        try {
            res.json(req.user);
        } catch (e) {
            next(e);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const newUserInfo = req.body;
            const userId = req.params.userId;

            await User.findByIdAndUpdate(userId, newUserInfo);

            res.json('updated')
        } catch (e) {
            next(e);
        }
    },

    createUser: async (req, res, next) => {
        try {
            await User.createWithHashPassword(req.body);

            res.status(201).json('OK')
        } catch (e) {
            next(e);
        }
    },

    deleteUserById: async (req, res, next) => {
        try {
            await User.deleteOne({ _id: req.params.userId });

            res.status(204).send('OK')
        } catch (e) {
            next(e);
        }
    },

    uploadAvatar: async (req, res, next) => {
        try {
            const uploadedData = await s3Service.uploadPublicFile(req.files.avatar, 'user', req.user._id);

            const updatedUser = await User.findByIdAndUpdate(req.user._id, { avatar: uploadedData.Location }, { new: true });

            res.json(updatedUser);
        } catch (e) {
            next(e);
        }
    },
};
