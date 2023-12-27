const http = require('http');
const port = process.env.PORT || 30000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello PM2   Webpack Node React node1  and Ashutosh  Aditya\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
