'use strict';

const assert = require('node:assert');
const { add, greet } = require('./index');

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(greet('world'), 'Hello, world!');

