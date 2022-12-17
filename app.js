const express = require('express');

const userDb = require('./dataBase/users')

const userRouter = require('./router/user.router')

// створюємо сервер

const app = express();

// вчимо приймати вхідні повідомлення

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);


app.get('/', (req, res) => {
    res.json('welcome')
})

app.listen(5000, () => {
    console.log('Server listen 5000')
})
