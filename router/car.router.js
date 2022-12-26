const router = require('express').Router();

const { carController } = require('../controller');


router.get('/', carController.getAllCars);
router.post('/', carController.createCar);

router.get('/:carId', carController.findOne);
router.put('/:carId', carController.updateCar);
router.delete('/:carId', carController.deleteCarById);

module.exports = router;
