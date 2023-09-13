var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<h1>Hello World!</h1>');
    res.end('Adres ip klienta: '+ req.socket.remoteAdress);
}).listen(8080);