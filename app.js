require('dotenv').config()
const cor = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const cookieParser = require('cookie-parser')
app.use(express.json({ limit: '10mb' }))
app.use(cookieParser())
app.use(cor())

require('./db/conn')

const user = require('./routes/user')
const books = require('./routes/books')
const conversationRoute = require('./routes/conversations')
const messageRoute = require('./routes/messages')

app.use('/api/user', user)
app.use('/api/books', books)
app.use('/api/conversations', conversationRoute)
app.use('/api/messages', messageRoute)


app.get('/setcookie', function (req, res) {

    // Setting a cookie with key 'my_cookie' 
    // and value 'geeksforgeeks'
    res.cookie('my_cookie', 'geeksforgeeks');
    res.send('Cookies added');
})

// Route for getting all the cookies
app.get('/getcookie', function (req, res) {
    res.send(req.cookies);
})

//   Code	Text	        Purpose
//    200	OK	            For successful GET and PUT requests.
//    201	Created	        For a successful POST request.
//    202	Accepted	    For a request that resulted in a scheduled task being created to perform the actual request.
//    400	Bad Request	    Issued when a malformed request was sent.
//    401	Unauthorized    This response is sent when your client failed to provide credentials or its credentials were invalid.
//    403	Forbidden	    Returned when permissions do not allow the operation.
//    404	Not Found	    When a particular resource doesn’t exist or couldn’t be found.


const io = require('socket.io')(port)

console.log('socket connected ')
let users = []
const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
        users.push({ userId, socketId })
}

const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId)
}

const getUser = (userId) => {
    return users.find(user => user.userId === userId)
}

// when connect 
io.on('connection', (socket) => {
    console.log('a user connected')
    //take userId and socketId
	console.log(users);
    socket.on('addUser', (userId) => {
        addUser(userId, socket.id)
        io.emit('getUsers', users)
    })

    //send and get message
    socket.on('sendMessage', ({ senderId, receiverId, text }) => {
        const user = getUser(receiverId)

        io.to(user.socketId).emit('getMessage', {
            senderId, text,
        })
    })

    // when disconnect
    socket.on('disconnect', () => {
        removeUser(socket.id)
        io.emit('getUsers', users)
    })
})

if (process.env.NODE_ENV == 'production') {
    const path = require('path');
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(port, () => {
    console.log(`Backend is running at Port ${port}`)
})
// mongodb+srv://Ankit628792:<password>@cluster0.tde6c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
