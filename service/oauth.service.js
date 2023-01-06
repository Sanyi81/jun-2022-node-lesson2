const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const ErrorAPI = require("../error/errorAPI");
const {ACCESS_SECRET, REFRESH_SECRET} = require("../config/config");

module.exports = {
    hashPassword: (password) => bcrypt.hash(password, 10),

    comparePasswords: async (hashPassword, password) => {
        const isPasswordSame = await bcrypt.compare(password, hashPassword);

        if (!isPasswordSame) {
            throw new ErrorAPI('Wrong email or password', 400)
        };
    },

    generateAccessTokenPair: (dataToSign = {}) => {
        const accessToken = jwt.sign(dataToSign, ACCESS_SECRET, { expiresIn: '15m' });
        const refreshToken = jwt.sign(dataToSign, REFRESH_SECRET, { expiresIn: '30d' });

        return {
            accessToken,
            refreshToken
        }

    },

    checkToken: (token = '', tokenType = 'accessToken') => {
        try {
            let secret = '';

            if (tokenType === 'accessToken') secret = ACCESS_SECRET;
            if (tokenType === 'refreshToken') secret = REFRESH_SECRET;

            return jwt.verify(token, secret);
        } catch (e) {
            throw new ErrorAPI('Token is not valid', 401);
        }


    }
}