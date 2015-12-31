import test from 'ava';
import m from './';

test(t => {
	t.true(m('sindresorhus.com'));
	t.true(m('sindresorhus.ninja'));
	t.false(m('sindresorhus.local'));
	t.false(m(''));
	t.false(m());
});
