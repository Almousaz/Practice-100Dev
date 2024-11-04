const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8000, () => {
    console.log("server running");
  });

// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {
//     fs.readFile('index.html', (err, data) => {
//         if (err) {
//             res.writeHead(404, { 'Content-Type': 'text/plain' });
//             res.write('404 Not Found');
//         } else {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.write(data);
//         }
//         res.end();
//     });
// }).listen(8000, () => {
//     console.log('Server is running on http://localhost:8000');
// });
