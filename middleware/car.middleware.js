const {carService} = require("../service");
const ErrorApi = require("../error/errorAPI");
module.exports = {
    checkIsCarExist: async (req, res, next) => {
        try {
            const { carId } = req.params;
            const car = await carService.findByParams({ _id: carId });

            if (!car) {
                throw new ErrorApi('Car not found', 404);
            }

            req.user = car;

            next();
        } catch (e) {
            next(e);
        }
    },

    isCarValidCreate: (req, res, next) => {
        try {
            const { model, year, price } = req.body;

            if (!model || typeof model !== 'string') {
                throw new ErrorApi('Wrong model', 400);
            }

            if (!year || year < 1800 || Number.isNaN(+year)) {
                throw new ErrorApi('Wrong year', 400);
            }

            if (!price || price < 0 || Number.isNaN(+price)) {
                throw new ErrorApi('Wrong price', 400);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isCarValidUpdate: (req, res, next) => {
        try {
            const { model, year, price } = req.body;

            if (!model && typeof name !== 'string') {
                throw new ErrorApi('Wrong model', 400);
            }

            if (year && (year < 1800 || Number.isNaN(+year) || year === 'string')) {
                throw new ErrorApi('Wrong year', 400);
            }

            if (price && (price < 0 || Number.isNaN(+price))) {
                throw new ErrorApi('Wrong price', 400);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
};
