const router = require('express').Router();

const controller = require('../controller/user.controller');

const mdlwr = require('../middleware/user.middleware');

router.get('/', controller.getAllUsers);

router.get('/:userId', mdlwr.checkIsUserExist, controller.getUserById);

router.put('/:userId', mdlwr.checkIsUserExist, controller.updateUser);

// router.post('/', (req, res) => {
//
//     const userInfo = req.body;
//
//     userDb.push(userInfo);
//
//     res.status(201).json('created')
// });

module.exports = router;
