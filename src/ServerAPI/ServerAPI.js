import { Server } from 'http';

export default class ServerAPI extends Server {
  constructor (port = 80, root = __dirname) {
    super();
    this.port = parseFloat(port);
    this.root = root;

    this.on = this.on.bind(this);
    this.up = this.up.bind(this);
    super.on('request', this.onRequest);
  }

  onRequest (request, response) {
    this.emit(request.method.toLowerCase(), request, response);
  }

  on (type, handler) {
    switch (type) {
      case 'start':
        this.onStart = handler.bind(this);
        break;
      case 'request': break;
      default:
        super.on(type, handler);
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
