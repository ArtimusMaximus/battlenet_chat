const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'https://battlenet.es9.app',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
        credentials: true
    }
});
const PORT = process.env.PORT || 9999;

app.use(express.static(join(__dirname, '../dist')));
app.use(cors({
    origin: 'https://battlenet.es9.app',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));
let allUsers = [];

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, "../dist/index.html"))
});
io.on('connection', (socket) => {
    let username = null;
    console.log("a user connected...");
    let channelName = 'Brood War USA-1';
    socket.join(channelName);
    socket.emit('joining', channelName);

    socket.on('set username', (name) => {
        username = name;
        allUsers.push(username);
        socket.emit('set username', name);
        socket.emit('get all users', allUsers);
    });

    socket.on('chat message', (msg) => {
        // io.emit('chat message', msg);
        if (msg.value.startsWith("/join")) {
            const newChannelName = msg.value.split(" ")[1];
            if (newChannelName) {
                socket.leave(channelName);
                channelName = newChannelName;
                socket.join(channelName);
                socket.emit('joining', channelName);
            }
            console.log('channelName\t', channelName);

            // io.to(channelName).emit('joinedChannel', `You have joined channel: ${channelName}`);
        } else {
            const fullMessage = { name: username, value: msg.value };
            io.to(channelName).emit('chat message', fullMessage);
        }
    });
});





server.listen(PORT, () => {
    console.log(`Server on PORT ${PORT}~~~~`)
})

