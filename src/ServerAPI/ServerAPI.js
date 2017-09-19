import { Server } from 'http';

const HANDLERS = {};

/**
 * handleRequest method emits events of http request's methods types.
 * #params {Object} request - object request.
 * #params {Object} response - object of response.
 */
function handleRequest (request, response) {
  const { method } = request;
  const type = method.toLowerCase();

  if (Object.prototype.hasOwnProperty.call(HANDLERS, type)) {
    HANDLERS[type](request, response);
  }
}

/**
 * Class of main server api.
 * #params {number} [port = 80] - listening port.
 * #param {string} [root = __dirname] - root dirrectory of content.
 */
export default class ServerAPI extends Server {
  constructor (port = 80, root = __dirname) {
    super();
    this.port = parseFloat(port);
    this.root = root;

    this.on = this.on.bind(this);
    this.up = this.up.bind(this);

    this.on('request', handleRequest.bind(this));
  }

  /**
   * Method to set handlers, adds start handler and handlers for request's types.
   * #param {string} type - type of event. Available start event emits at
   *                        server's starting and lowercased names of request's events.
   * #params {function} handler - event handler. All events but start get request and
   *                              response objects as arguments, start event does not
   *                              get any arguments.
   * #return this
   * You can set only one handler for each event. If you call on method with same event's name,
   * only last handler will be set.
   */
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

  /**
   * Method to fire server.
   * #return this
   */
  up () {
    super.listen(this.port);
    this.emit('fired');

    if (typeof this.onStart === 'function') {
      this.onStart();
    }

    return this;
  }
}
