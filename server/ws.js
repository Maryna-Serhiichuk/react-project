const http = require('http')
const { WebSocketServer, OPEN } = require('ws')

const url = require('url')
const uuid = require('uuid').v4

const server = http.createServer()
const wss = new WebSocketServer({ server })
const PORT = 3031

wss.on('connection', (ws) => {
    console.log('New WebSocket connection')
    
    ws.on('message', (message) => {
        console.log('Received:', message.toString())
    })
    
    ws.send(JSON.stringify({ type: 'WELCOME', message: 'Connected to WebSocket server' }))
})

const testMessage = (id, text) => ({
    "id": id,
    "title": "Web Socket",
    "body": text,
    "userId": 1
})

process.stdin.setEncoding('utf-8');
process.stdin.on('data', (input) => {
    const command = input.trim();

    if (command === 'exit') {
        server.close(() => {
            process.exit(0);
        });
    } else {
        wss.clients.forEach((client) => {
            if (client.readyState === OPEN) {
                console.log('SENT')
                const id = uuid()
                client.send(JSON.stringify({ type: 'NEW_POST', data: testMessage(id, command) }));
            }
        });
    }
});

server.listen(PORT, () => {
    console.log('Web Sockets Server')
})

module.exports = { wss, OPEN }