const Car = require("../dataBase/Car");
const User = require("../dataBase/User");

module.exports = {
    findByParams: async (filter = {}) => {
        return Car.find(filter);
    },

    findOneByIdWithUser: async (carId) => {
        return Car.findById(carId).populate('user');
    },

    updateOne: async (carId, newInfo) => {
        return Car.findByIdAndUpdate(carId, newInfo, { new: true });
    },

    create: async (carInfo) => {
      return Car.create(carInfo);
    },

    deleteOne: async (carId) => {
        return Car.deleteOne({ _id: carId });
    }
};
