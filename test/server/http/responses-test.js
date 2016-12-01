/*
 * responses-test.js: Tests for HTTP responses.
 *
 * (C) 2011, Charlie Robbins, Paolo Fragomeni, & the Contributors.
 * MIT LICENSE
 *
 */

var assert = require('assert'),
    vows = require('vows'),
    tarantino = require('../../../lib/tarantino');

vows.describe('tarantino/http/responses').addBatch({
  "When using tarantino.http": {
    "it should have the relevant responses defined": function () {
      Object.keys(require('../../../lib/tarantino/http/responses')).forEach(function (name) {
        assert.isFunction(tarantino.http[name]);
      });
    }
  }
}).export(module);
