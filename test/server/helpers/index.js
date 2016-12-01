/*
 * index.js: Test helpers for director.
 *
 * (C) 2011, Charlie Robbins, Paolo Fragomeni, & the Contributors.
 * MIT LICENSE
 *
 */

var http = require('http');

exports.createServer = function (router) {
  return http.createServer(function (req, res) {
    router.dispatch(req, res, function (err) {
      if (err) {
        res.writeHead(404);
        res.end();
      }
    });
  });
};

// Ugly hack to close the server, since I can't for the life of me find how I can
// run a callback AFTER a test is finished with `vows`.
exports.closeServerDelayed = function (server) {
  setTimeout(function() {
    server.close();
  }, 1000);
};

exports.handlers = {
  respondWithId: function (id) {
    this.res.writeHead(200, { 'Content-Type': 'text/plain' })
    this.res.end('hello from (' + id + ')');
  },
  respondWithData: function () {
    this.res.writeHead(200, { 'Content-Type': 'application/json' })
    this.res.end(JSON.stringify(this.data));
  },
  respondWithOk: function () {
    return function () {
      this.res.writeHead(200);
      this.res.end('ok');
    };
  },
  streamBody: function () {
    var body = '',
        res = this.res;

    this.req.on('data', function (chunk) {
      body += chunk;
    });

    this.req.on('end', function () {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(body);
    });
  }
};

exports.macros = require('./macros');
