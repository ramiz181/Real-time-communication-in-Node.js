import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 8001 })

server.on('connection', (socket) => {
    console.log("sockets is : ", socket);

    socket.on('message', (message) => {
        console.log("Message %s", message)
        console.log("Message", message)
        socket.send("Thanks buddy!")
    })
})