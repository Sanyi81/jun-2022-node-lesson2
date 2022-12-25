const User = require("../dataBase/User");

module.exports = {
    findByParams: async (filter = {}) => {
        return User.find(filter);
    },

    create: async (userInfo) => {
      return User.create(userInfo);
    },

    findOneByParams: async (filter = {}) => {
        return User.findOne(filter);
    },

    updateOne: async (userId, newInfo) => {
        return User.findByIdAndUpdate(userId, newInfo, { new: true });
    },

    deleteOne: async (userId) => {
        return User.deleteOne({ _id: userId });
    }
}
