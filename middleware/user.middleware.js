const userDb = require('../dataBase/users.json');
const ErrorApi = require('../error/errorAPI')
const {fileServices} = require("../service");

module.exports = {
    checkIsUserExist: async (req, res, next) => {
        try {
            const {userId} = req.params;
            const users = await fileServices.reader();

            const user = users.find((user) => user.id === +userId);

            if (!user) {
                throw new ErrorApi('User not found', 404);
            }

            req.users = users;
            req.user = user;
            next();
        } catch (e) {
            next(e);
        }
    },

    isBodyValidCreate: (req, res, next) => {

        try {
            const { name, age } = req.body;
            if (!name || name.length < 3 || typeof name !== 'string') {
                throw new ErrorApi('Wrong name', 400);
            }

            if (!age || age < 0 || Number.isNaN(+age)) {
                throw new ErrorApi('Wrong age', 400);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isBodyValidUpdate: (req, res, next) => {

        try {
            const { name, age } = req.body;
            if (name && (name.length < 3 || typeof name !== 'string')) {
                throw new ErrorApi('Wrong name', 400);
            }

            if (age && (age < 0 || Number.isNaN(+age))) {
                throw new ErrorApi('Wrong age', 400);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isIdValid: (req, res, next) => {

        try {
            const { userId } = req.params;

            if (userId < 0 || Number.isNaN(+userId)) {
                throw new ErrorApi('Not valid id', 400);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
}
