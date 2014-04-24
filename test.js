var connect = require('./');
var parse = connect.parse;
var assert = require('assert');
var equal = assert.deepEqual;
var net = require('net');

describe('parse(obj)', function(){
  describe('{ address, port }', function(){
    it('should work', function(){
      var obj = { address: '1.2.3.4', port: 1337 }
      equal(parse(obj), {
        host: '1.2.3.4',
        port: 1337
      })
    });
  });
  describe('{ host, port }', function(){
    it('should work', function(){
      var obj = { host: '1.2.3.4', port: 1337 }
      equal(parse(obj), {
        host: '1.2.3.4',
        port: 1337
      })
    });
  });
  describe('port', function(){
    it('should work', function(){
      equal(parse(1337), {
        host: '127.0.0.1',
        port: 1337
      })
    });
  });
  describe('"port"', function(){
    it('should work', function(){
      equal(parse('1337'), {
        host: '127.0.0.1',
        port: 1337
      })
    });
  });
  describe('":port"', function(){
    it('should work', function(){
      equal(parse(':1337'), {
        host: '127.0.0.1',
        port: 1337
      })
    });
  });
  describe('"host:port"', function(){
    it('should work', function(){
      equal(parse('1.2.3.4:1337'), {
        host: '1.2.3.4',
        port: 1337
      })
    });
  });
});

describe('connect(obj)', function(){
  it('should connect', function(done){
    var server = net.createServer(function(){
      done();
    });
    server.listen(function(){
      var port = server.address().port;
      assert(connect(':' + port))
    });
  });
});

describe('connect(obj, fn)', function(){
  it('should call fn', function(done){
    var server = net.createServer();
    server.listen(function(){
      var port = server.address().port;
      connect(':' + port, done);
    });
  });
});

