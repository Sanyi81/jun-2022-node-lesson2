const router = require('express').Router();

const { carController } = require('../controller');

const mdlwr = require('../middleware/car.middleware');

router.get('/', carController.getAllCars);
router.post('/', mdlwr.isCarValidCreate, carController.createCar);

router.get('/:carId', mdlwr.checkIsCarExist, carController.findOne);
router.put('/:carId', mdlwr.isCarValidUpdate, mdlwr.checkIsCarExist, carController.updateCar);
router.delete('/:carId', carController.deleteCarById);

module.exports = router;
