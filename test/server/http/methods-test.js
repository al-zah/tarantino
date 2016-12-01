/*
 * methods-test.js: Tests for HTTP methods.
 *
 * (C) 2011, Charlie Robbins, Paolo Fragomeni, & the Contributors.
 * MIT LICENSE
 *
 */

var assert = require('assert'),
    vows = require('vows'),
    tarantino = require('../../../lib/tarantino');

vows.describe('tarantino/http/methods').addBatch({
  "When using tarantino": {
    "an instance of tarantino.http.Router should have all relevant RFC methods": function () {
      var router = new tarantino.http.Router();
      tarantino.http.methods.forEach(function (method) {
        assert.isFunction(router[method.toLowerCase()]);
      });
    },
    "the path() method": {
      topic: new tarantino.http.Router(),
      "/resource": {
        "should insert nested routes correct": function (router) {
          function getResource() {}
          function modifyResource() {}

          router.path(/\/resource/, function () {
            this.get(getResource);

            this.put(/\/update/, modifyResource);
            this.post(/create/, modifyResource);
          });

          assert.equal(router.routes.resource.get, getResource);
          assert.equal(router.routes.resource.update.put, modifyResource);
          assert.equal(router.routes.resource.create.post, modifyResource);
        }
      }
    }
  }
}).export(module);
