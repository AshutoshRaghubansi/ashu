const http = require('http');
const port = process.env.PORT || 30000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
<<<<<<< HEAD
  const msg = 'Hello PM2   Webpack Node React node1  Engineering Team\n'
=======
  const msg = 'Hello PM2   Webpack Node React node1  and Ashutosh  Aditya\n'
>>>>>>> 13a52aebbec59de7a4bc2e0121998a6132cacdc4
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
