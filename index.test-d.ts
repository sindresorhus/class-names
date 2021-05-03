import {expectType} from 'tsd';
import classNames from './index.js';

expectType<string>(classNames('unicorn', 'rainbow'));
expectType<string>(
	classNames({awesome: true, foo: false}, 'unicorn', {rainbow: false})
);
