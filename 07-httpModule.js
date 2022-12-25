// HTTP Module - It is a built-in module in Node.js to transfer data and handle requests and responses.
// Two types - HTTP & HTTPS
// createServer() method is used to create the HTTP server

const http = require("http");

// http.createServer((req, res) => {
//     // Writes a response to the client
//     res.write('Welcome to HTTP Module section')
//     res.end() // end the response
// }).listen(8000)

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to NODEJS Sessions");
  } else if (req.url === "/contact") {
    res.end("Contact Us page");
  } else {
    res.end(`
            <h1>Error - 404</h1>
            <p>Ooopsss...!<p>
        `);
  }
});

server.listen(8080);
