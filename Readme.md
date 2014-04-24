
# net-connect

  Make tcp connections by port, host+port strings or objects.

## Example

```js
var connect = require('net-connect');

// port
var con = connect(1337);

// ":port"
var con = connect(':1337');

// "host:port"
var con = connect('1.2.3.4:1337');

// { host, port }
var con = connect({ host: '1.2.3.4', port: 1337 });

// { address, port }
var con = connect({ address: '1.2.3.4', port: 1337 });
```

## Installation

```bash
$ npm install net-connect
```

## API

### connect(obj[, listener])

  Create a tcp connection to the address specified by `obj`.

  Optionally pass a `listener` fn to be called when the connection has been
  established.

### connect.parse(obj)

  Parse `obj` and return a `{ host, port }` object. This is used internally
  by `connect()`.

## License

  MIT

