const websocket = require('ws')
const server = new websocket.server({port: '3000'})

server.on('connection', socket => {
    socket.on('message', message => {
        console.log(message)
        socket.send(`${message}`)
    })
})