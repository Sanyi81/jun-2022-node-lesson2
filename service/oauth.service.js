const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const ErrorAPI = require("../error/errorAPI");

module.exports = {
    hashPassword: (password) => bcrypt.hash(password, 10),

    comparePasswords: async (hashPassword, password) => {
        const isPasswordSame = await bcrypt.compare(password, hashPassword);

        if (!isPasswordSame) {
            throw new ErrorAPI('Wrong email or password', 400)
        };
    },

    generateAccessTokenPair: (dataToSign = {}) => {
        const accessToken = jwt.sign(dataToSign, 'secretWorld', { expiresIn: '15m' });
        const refreshToken = jwt.sign(dataToSign, 'secretRefreshWorld', { expiresIn: '30d' });

        return {
            accessToken,
            refreshToken
        }

    }
}