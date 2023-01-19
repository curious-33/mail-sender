const fs = require('fs')
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-type', 'text/plain')
  res.end('Hello worl!\n')
})

fs.watch('app.js', (eventType, filename) => {
  console.log(`[${filename}]: restarting due to changes...`)
  console.log(`[${filename}]: ${eventType}`)
})

server.listen(port, hostname, () => {
  console.log(`⚡️ Server running at http://${hostname}:${port}`)
})
