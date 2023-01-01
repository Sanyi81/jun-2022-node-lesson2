const router = require('express').Router();

const controller = require('../controller/auth.controller');
const mdlwr = require('../middleware/auth.middleware');

router.post('/login', mdlwr.isBodyValid, controller.login);

module.exports = router;