const http = require('http');
const socketIO = require('socket.io');
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


const io = socketIO(server, { cors: 'http://localhost:80' });

io.on('connection', (socket) => {
    console.log(socket.id);

    console.log(socket.handshake.auth);
    console.log(socket.handshake.query);

    // socket.on('I_am_connected', (data) => {
    //     console.log(data);
    // });

    // socket.emit('message:new', { message: 'Hello people' })

    socket.on('message:send', (messageData) => {
        console.log(messageData.text);

        // Send event one to one
        // socket.emit('message:new', messageData.text)

        // Send event to all except emitter
        // socket.broadcast.emit('message:new', messageData.text)

// send event to all clients (with emitter)
        io.emit('message:new', messageData.text);

        io.to(socket.id).emit('test')
    })

    socket.on('room:join', (roomInfo)  => {
        socket.join(roomInfo.roomId); // SOCKET join to room
        // socket.leave(roomInfo.roomId); // SOCKET leave room

        // send to all in room except new member
        // socket.to(roomInfo.roomId).emit('user:room:join', socket.id);

        // send to all room members
        io.to(roomInfo.roomId).emit('user:room:join', socket.id);
    });

    socket.on('disconnect', () => {
        console.log(`Socket ${socket.id} was disconnected`)
    })
});



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
