'use strict';
var test = require('ava');
var fn = require('./');

test(function (t) {
	t.assert(fn('sindresorhus.com'));
	t.assert(fn('sindresorhus.ninja'));
	t.assert(!fn('sindresorhus.local'));
	t.assert(!fn(''));
	t.assert(!fn());
	t.end();
});
