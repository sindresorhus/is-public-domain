import test from 'ava';
import isPublicDomain from './index.js';

test('main', t => {
	t.true(isPublicDomain('sindresorhus.com'));
	t.true(isPublicDomain('sindresorhus.ninja'));
	t.false(isPublicDomain('sindresorhus.local'));
	t.false(isPublicDomain(''));
});
