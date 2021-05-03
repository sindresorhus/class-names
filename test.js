import test from 'ava';
import classNames from './index.js';

test('main', t => {
	t.is(classNames('x'), 'x');
	t.is(classNames('x', 'y'), 'x y');
	t.is(classNames(null, 'x', undefined, Number.NaN, 0, 4, true, 'y', false, ''), 'x y');
	t.is(classNames('x', {
		y: true,
		nope: false,
		z: 'foo'
	}), 'x y z');
});
