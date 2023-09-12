const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hola, this is the home page');
    } else if (req.url === '/about') {
        res.end('This is our history');
    } else {
        res.end(`
            <h1>Oops, You messed up</h1>
            <a href="/">Home</a>
        `);
    }
});

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
