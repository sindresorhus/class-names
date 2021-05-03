/**
Conditionally join CSS class names together.

@param input - Accepts a combination of strings and objects. When an object, only object keys with truthy values are included. Anything else is ignored.

@example
```
import classNames from '@sindresorhus/class-names';

classNames('unicorn', 'rainbow');
//=> 'unicorn rainbow'

classNames({awesome: true, foo: false}, 'unicorn', {rainbow: false});
//=> 'awesome unicorn'

classNames('unicorn', null, undefined, 0, 1, {foo: null});
//=> 'unicorn'

const buttonType = 'main';
classNames({[`button-${buttonType}`]: true});
//=> 'button-main'

const Button = props => {
	console.log(props);
	// {
	// 	type: 'success',
	// 	small: true
	// }

	const buttonClass = classNames(
		'button',
		{
			[`button-${props.type}`]: props.type,
			'button-block': props.block,
			'button-small': props.small
		}
	);

	console.log(buttonClass);
	//=> 'button button-success button-small'

	return <button className={buttonClass}>…</button>;
};
```
*/
export default function classNames(...input: unknown[]): string;
