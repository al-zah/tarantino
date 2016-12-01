/*
 * mount-test.js: Tests for the core mount method.
 *
 * (C) 2011, Charlie Robbins, Paolo Fragomeni, & the Contributors.
 * MIT LICENSE
 *
 */

var assert = require('assert'),
    vows = require('vows'),
    tarantino = require('../../../lib/tarantino');

vows.describe('tarantino/cli/path').addBatch({
  "An instance of tarantino.cli.Router with routes": {
    topic: new tarantino.cli.Router({
      'apps': function () {
        console.log('apps');
      },
      ' users': function () {
        console.log('users');
      }
    }),
    "should create the correct nested routing table": function (router) {
      assert.isObject(router.routes.apps);
      assert.isFunction(router.routes.apps.on);
      assert.isObject(router.routes.users);
      assert.isFunction(router.routes.users.on);
    }
  }
}).export(module);
