import ServerAPI, { getContentType, getStatusText } from './index';

const server = new ServerAPI(8084, __dirname);

server.on('start', () => console.log('HELLO!'));

server.on('get', (request, response) => {
  response.statusCode = 200;
  response.statusMessage = getStatusText(200);
  response.setHeader('Content-Type', getContentType('txt'));
  response.setHeader('Content-length', 'Hello!'.length);
  response.end('Hello!');
});

server.on('get', (request, response) => {
  response.statusCode = 200;
  response.statusMessage = getStatusText(200);
  response.setHeader('Content-Type', getContentType('txt'));
  response.setHeader('Content-length', 'Hello! 2'.length);
  response.end('Hello! 2');
});

server.up();