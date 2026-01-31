import http from 'http'



const server = http.createServer((req, res) => {
    if (req.url === '/events') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            Connection: 'keep-alive'
        })
        const interval = setInterval(() => {
            res.write(`data: ${Date.now()}\n\n`)
        }, 3000);
        req.on('close', () => {
            clearInterval(interval)
            res.end();
        })
    } else {
        res.writeHead(200)
        res.end('Server is up')
    }
})
server.listen(8001, () => console.log("Server running"))