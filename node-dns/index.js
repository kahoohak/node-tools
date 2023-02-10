// const dgram = require('dgram')

// const server = dgram.createSocket('udp4')

// server.on('message', (msg, info) => {
//     console.log(msg)
// })

// server.on('error', (err) => {
//     console.log(`server error: ${err.stack}`)
//     server.close()
// })

// server.on('listening', () => {
//     const address = server.address()
//     console.log(`server listening ${address.address}:${address.port}`)
// })

// server.bind(53)

const dgram = require('dgram')

const server = dgram.createSocket('udp4')

server.on('message', (msg, info) => {
    console.log(msg)
});

server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`)
    server.close()
})
  
server.on('listening', () => {
    const address = server.address()
    console.log(`server listening ${address.address}:${address.port}`)
})
  
server.bind(3002)