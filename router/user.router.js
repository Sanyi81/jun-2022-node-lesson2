const userDb = require("../dataBase/users");
const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('USERS ENDPOINT');

        res.json(userDb);
})

router.get('/:userId', (req, res) => {
    console.log(req.params);

    const { userId } = req.params;

    res.json(userDb[userId])
})

router.post('/', (req, res) => {

    const userInfo = req.body;

    userDb.push(userInfo);

    res.status(201).json('created')
});

router.put('/:userId', (req, res) => {
    const newUserInfo = req.body;
    const userId = req.params.userId;

    userDb[userId] = newUserInfo;

    res.json('updated')});


module.exports = router;