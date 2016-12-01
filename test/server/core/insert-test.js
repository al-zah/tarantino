/*
 * insert-test.js: Tests for inserting routes into a normalized routing table.
 *
 * (C) 2011, Charlie Robbins, Paolo Fragomeni, & the Contributors.
 * MIT LICENSE
 *
 */

var assert = require('assert'),
    vows = require('vows'),
    tarantino = require('../../../lib/tarantino');

vows.describe('tarantino/core/insert').addBatch({
  "An instance of tarantino.Router": {
    topic: new tarantino.Router(),
    "the insert() method": {
      "'on', ['foo', 'bar']": function (router) {
        function route () { }

        router.insert('on', ['foo', 'bar'], route);
        assert.strictEqual(router.routes.foo.bar.on, route);
      },
      "'on', ['foo', 'bar'] again": function (router) {
        function route () { }

        router.insert('on', ['foo', 'bar'], route);
        assert.isArray(router.routes.foo.bar.on);
        assert.strictEqual(router.routes.foo.bar.on.length, 2);
      },
      "'on', ['foo', 'bar'] a third time": function (router) {
        function route () { }

        router.insert('on', ['foo', 'bar'], route);
        assert.isArray(router.routes.foo.bar.on);
        assert.strictEqual(router.routes.foo.bar.on.length, 3);
      },
      "'get', ['fizz', 'buzz']": function (router) {
        function route () { }

        router.insert('get', ['fizz', 'buzz'], route);
        assert.strictEqual(router.routes.fizz.buzz.get, route);
      }
    }
  }
}).export(module);
