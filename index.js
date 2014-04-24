
/**
 * Module dependencies.
 */

var net = require('net');

/**
 * Expose `connect` and `connect.parse`.
 */

module.exports = connect;
connect.parse = parse;

/**
 * Connect to `obj`.
 *
 * @param {Mixed} obj
 * @param {Function=} listener
 * @api public
 */

function connect(obj, listener){
  var addr = parse(obj);
  return net.connect(addr.port, addr.host, listener);
};

/**
 * Parse `obj` and return { host, port }
 *
 * Supported formats:
 *
 *   - { address, port }
 *   - { host, port }
 *   - <port>
 *   - "<port>"
 *   - ":<port>"
 *   - "<host>:<port>"
 *
 * @param {Mixed} obj
 * @return {Object}
 * @throws {TypeError}
 * @api public
 */

function parse(obj){
  var host = '127.0.0.1';
  var port;

  switch(typeof obj) {
    case 'object':
      host = obj.address || obj.host;
      port = obj.port;
      break;
    case 'number':
      port = obj;
      break;
    case 'string':
      var segs = obj.split(':');
      port = segs.pop();
      if (segs[0]) host = segs[0];
      break;
    default:
      throw new TypeError;
  }

  return {
    host: host,
    port: port
  };
}

