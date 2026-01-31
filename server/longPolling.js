import http from 'http'
import url from 'url'

const server = http.createServer((req, res) => {

    const as = url.parse(req.url, true)

    if (as.pathname === '/service') {

        setTimeout(() => {
            res.writeHead(200, {
                'Content-Type': "application/json"
            })
            res.end(`${new Date().toISOString()}`)
        }, 3000);
    }
    else {
        res.end("nothhing")
    }
})

server.listen(8001, console.log("Server started"))