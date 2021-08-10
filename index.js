import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);
const tlds = require('tlds');

export default function isPublicDomain(domain) {
	if (typeof domain !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof domain}\``);
	}

	if (domain.trim() === '') {
		return false;
	}

	const tld = domain.split('.').pop();

	return tld && tlds.includes(tld);
}
