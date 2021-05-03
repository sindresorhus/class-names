# class-names

> Conditionally join CSS class names together - Especially useful with React

## Install

```
$ npm install @sindresorhus/class-names
```

## Usage

```js
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
```

```jsx
import classNames from '@sindresorhus/class-names';

const Button = props => {
	console.log(props);
	/*
	{
		type: 'success',
		small: true
	}
	*/

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

## API

### classNames(…input)

Conditionally join CSS class names together.

#### input

Type: `string | object`

Accepts a combination of strings and objects. When an object, only object keys with truthy values are included. Anything else is ignored.

## FAQ

### How is it different from [`classnames`](https://github.com/JedWatson/classnames)?

- Dedupes by default.
- Does not coerce numbers to strings.
- Does not support array input. Just use the spread operator.

## Related

- [react-extras](https://github.com/sindresorhus/react-extras) - Useful components and utilities for working with React
