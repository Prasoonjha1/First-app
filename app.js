const http = require('http');

const server = http.createServer();
server.on('connection', (socket)=>{
    console.log("New Connection");
});

server.listen(8080);

console.log('Listen');
