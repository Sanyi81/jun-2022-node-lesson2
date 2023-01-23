const http = require('http');
const express = require('express');
const fileUpload = require('express-fileupload')
const swaggerUi = require('swagger-ui-express');
const mongoose = require("mongoose");
require('dotenv').config();

const userRouter = require('./router/user.router');
const authRouter = require('./router/auth.router')
const configs = require('./config/config')
const { cronRunner } = require("./cron");
const swaggerJson = require('./swagger.json')

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.set('strictQuery', true);

app.use(fileUpload());
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

app.get('/', (req, res) => {
    res.json('welcome')
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || 'Unknown error',
        status: err.status || 500
    });
});

server.listen(configs.PORT, async () => {
    await mongoose.connect(configs.MONGO_URL);
    console.log(`Server listen ${configs.PORT}`);
    cronRunner();
});
