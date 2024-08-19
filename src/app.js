const http = require('http');
const url = require('url');
const calc = require('./calc');
const fs = require('./fs')

const serverFunc = async (req, res) => {
  let result = 'Operation unknown';
  let status = 400;
  let headers = {'Content-Type': 'text/html'};
  try {
    const {query, pathname} = url.parse(req.url, true);
    if(pathname === '/calc') {
      const {operation, a, b} = query;
      result = calc(operation, Number(a), Number(b));
      status = 200;
    }
    else if(pathname === '/fs') {
      const {operation, filename, text} = query;
      result = await fs(operation, filename, text);
      status = 201;
    }
    else {
      throw new Error('Operation unknown');
    }
  } catch(err) {
    status = 400;
    result = err.message;
  }
  res.writeHead(status, headers);
  res.end(result);
};

const app = http.createServer(serverFunc);

module.exports = app;