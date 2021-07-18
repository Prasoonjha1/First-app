const http = require('http');

const server = http.createServer();
server.on('connection', (socket)=>{
    console.log("New Connection");
});

server.listen(url='http//www.google.com');

console.log('Listen');