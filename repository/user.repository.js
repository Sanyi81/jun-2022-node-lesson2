const User = require('../dataBase/User');

module.exports = {
    find: async (query) => {
        const { limit = 10, page = 1, name } = query;

        let findObj = {};

        if(name) {
            findObj = {
                ...findObj,
                name: { $regex: name }
            }
        }

        return User.find(findObj).limit(limit).skip((page - 1) * limit);
    }
}
