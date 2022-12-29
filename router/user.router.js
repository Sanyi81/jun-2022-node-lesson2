const router = require('express').Router();

const controller = require('../controller/user.controller');

const mdlwr = require('../middleware/user.middleware');

router.get('/', controller.getAllUsers);
router.post('/', mdlwr.isNewUserValid, mdlwr.checkIsEmailUnique,controller.createUser);

router.get('/:userId', mdlwr.isUserIdValid, mdlwr.checkIsUserExist, controller.getUserById);
router.put('/:userId', mdlwr.isUserIdValid, mdlwr.isEditUserValid, mdlwr.checkIsUserExist, controller.updateUser);
router.delete('/:userId', mdlwr.isUserIdValid, controller.deleteUserById);

module.exports = router;
