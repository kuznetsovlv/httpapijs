import ServerAPI from './index';

const server = new ServerAPI(8084, __dirname);

server.on('start', () => console.log('HELLO!'))

server.on('get', (request, response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  
  response.setHeader('Content-Type', 'text/plain; charset=utf-8');
  response.setHeader('Content-length', 'Hello!'.length);
  response.end('Hello!');
});

server.up();