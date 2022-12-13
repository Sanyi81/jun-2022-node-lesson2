const express = require('express');
const {response, urlencoded} = require("express");

const userDb = require('./dataBase/users')

// створюємо сервер

const app = express();

// вчимо приймати вхідні повідомлення

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', (req, res) => {
    console.log('USERS ENDPOINT');

    // res.json({user: 'Sasha'});
    // res.end('Its OK!')
    // res.json('Very good!')
    // res.status(402).json('where is my money?')
    // res.sendFile('./"file"')
    res.json(userDb);
})

app.get('/users/:userId', (req, res) => {
    console.log(req.params);

    const { userId } = req.params;

    res.json(userDb[userId])
})

app.post('/users', (req, res) => {

    const userInfo = req.body;

    userDb.push(userInfo);

    res.status(201).json('created')
});

app.put('/users/:userId', (req, res) => {
    const newUserInfo = req.body;
    const userId = req.params.userId;

    userDb[userId] = newUserInfo;

    res.json('updated')
});

app.get('/', (req, res) => {
    res.json('welocme')
})

app.listen(5000, () => {
    console.log('Server listen 5000')
})
