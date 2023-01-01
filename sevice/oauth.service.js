const bcrypt = require('bcrypt');
const ErrorAPI = require("../error/errorAPI");

module.exports = {
    hashPassword: (password) => bcrypt.hash(passwrd, 10),

    comparePasswords: async (hashPassword, password) => {
        const isPasswordSame = await bcrypt.compare(password, hashPassword);

        if (!isPasswordSame) {
            throw new ErrorAPI('Wrong email or password')
        };
    }
}