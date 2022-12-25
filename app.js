const express = require('express');
require('dotenv').config();
const mongoose = require("mongoose");

const configs = require('./config/config')
const { userRouter, carRouter } = require("./router");


const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

mongoose.set('strictQuery', true);

app.use('/users', userRouter);
app.use('/cars', carRouter);

app.get('/', (req, res) => {
    res.json('welcome')
});

app.use((err, req, res, next) => {

    res.status(err.status || 500).json({
        message: err.message || 'Unknown error',
        status: err.status || 500
    });
});

app.listen(configs.PORT, async () => {
    await mongoose.connect(configs.MONGO_URL);
    console.log(`Server listen ${configs.PORT}`);
});
