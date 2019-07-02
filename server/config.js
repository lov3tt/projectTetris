const WebSocketServer = require ("ws").Server;

const server = new WebSocketServer({port: 8080})

server.on("connection", conn =>{
    console.log("Server Connected")

    conn.on("message", msg => {
        console.log("Message received", msg)
    })

    conn.on("close", () =>{
        console.log("connection closed")
    })
})