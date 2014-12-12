'use strict';

var pairs = require('..');

var test = require('tape')
  , cmpby = require('cmpby');


test('object-pairs', function (t) {
  var obj = {
    primitive: 1,
    null: null,
    undefined: undefined,
    identity: []
  };

  var kv = pairs(obj);

  t.ok(Array.isArray(kv), 'is array');

  kv.sort(cmpby(function (pair) { return pair[0]; }));

  t.deepEqual(kv, [
    ['identity', obj.identity],
    ['null', null],
    ['primitive', 1],
    ['undefined', undefined]
  ]);

  t.end();
});
