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
const usersInRooms = {};


app.get('/', (req, res) => {
    res.sendFile(join(__dirname, "../dist/index.html"))
});

io.on('connection', (socket) => {
    let username = null;
    let channelName = 'Brood War USA-1';
    console.log("a user connected...");



    socket.on('set username', (name) => {
        username = name;
        allUsers.push({ username, inChannel: channelName });

        if (!usersInRooms[channelName]) {
            usersInRooms[channelName] = [];
        }
        usersInRooms[channelName].push(username); // add initial self to default starting room

        // socket.emit('get all users', allUsers);

        socket.join(channelName);
        socket.emit('joining channel message', channelName);
        io.to(channelName).emit('user list', usersInRooms[channelName]);
    });

    socket.on('chat message', (msg) => {
        const fullMessage = { name: username, value: msg.value };
        io.to(channelName).emit('chat message', fullMessage);
        console.log('msg\t', msg);
        // if (msg.value.startsWith("/join")) {
        //     const newChannelName = msg.value.split(" ")[1];
        //     if (newChannelName) {
        //         socket.leave(channelName);
        //         channelName = newChannelName;
        //         // socket.join(channelName);
        //         // socket.emit('joining channel message', channelName);
        //     }
        //     console.log('channelName\t', channelName);

        //     // io.to(channelName).emit('joinedChannel', `You have joined channel: ${channelName}`);
        // } else {
        //     // const fullMessage = { name: username, value: msg.value };
        //     // io.to(channelName).emit('chat message', fullMessage);
        // }
    });
    socket.on('join room', (roomName, userName) => {
        socket.leave(channelName);
        socket.join(roomName);
        channelName = roomName;
        socket.emit('joining channel message', channelName);
        if (!usersInRooms[roomName]) {
            usersInRooms[roomName] = [];
        }
        usersInRooms[roomName].push(userName);
        console.log('usersInRooms[roomName]\t', usersInRooms[roomName]);
        io.to(roomName).emit('user list', usersInRooms[roomName]);
    });
    socket.on('leave room', (roomName, username) => {
        socket.leave(roomName);
        if (usersInRooms[roomName]) {
            usersInRooms[roomName] = usersInRooms[roomName].filter(user => user !== username);
            io.to(roomName).emit('user list', usersInRooms[roomName]);
        }
    });
    socket.on('disconnect', () => {
        console.log("a user disconnected...");
        for (let roomName in usersInRooms) {
            usersInRooms[roomName] = usersInRooms[roomName].filter(user => user !== socket.id);
            io.to(roomName).emit('user list', usersInRooms[roomName]);
        }
    });

});





server.listen(PORT, () => {
    console.log(`Server on PORT ${PORT}~~~~`)
})

