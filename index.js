'use strict';
module.exports = (...args) => {
	const ret = new Set();

	for (const item of args) {
		const type = typeof item;

		if (type === 'string' && item.length > 0) {
			ret.add(item);
		} else if (type === 'object' && item !== null) {
			for (const [key, value] of Object.entries(item)) {
				if (value) {
					ret.add(key);
				}
			}
		}
	}

	return [...ret].join(' ');
};
