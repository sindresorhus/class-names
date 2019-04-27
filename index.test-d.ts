import {expectType} from 'tsd';
import classNames = require('.');

expectType<string>(classNames('unicorn', 'rainbow'));
expectType<string>(
	classNames({awesome: true, foo: false}, 'unicorn', {rainbow: false})
);
