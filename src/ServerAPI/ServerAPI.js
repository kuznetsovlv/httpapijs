import { Server } from 'http';

const HANDLERS = {};

export default class ServerAPI extends Server {
  constructor (port = 80, root = __dirname) {
    super();
    this.port = parseFloat(port);
    this.root = root;

    this.on = this.on.bind(this);
    this.up = this.up.bind(this);

    this.on('request', this.onRequest.bind(this));
  }

  onRequest (request, response) {
    // this.emit(request.method.toLowerCase(), request, response);

    const { method } = request;
    const type = method.toLowerCase();

    if (Object.prototype.hasOwnProperty.call(HANDLERS, type)) {
      HANDLERS[type](request, response);
    }
  }

  on (type, handler) {
    switch (type) {
      case 'start':
        this.onStart = handler.bind(this);
        break;
      case 'connection':
      case 'request':
        super.on(type, handler);
        break;
      default:
        HANDLERS[type] = handler;
    }

    return this;
  }

  up () {
    super.listen(this.port);
    this.emit('fired');

    if (typeof this.onStart === 'function') {
      this.onStart();
    }

    return this;
  }
}
