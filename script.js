export function capitalize(string) {
	if (string.trim().length === 0) return string;
	else if (string.match(/^\d+$/)) return string;
	else if (string.match(/^[!@#$%^&*]+$/)) return string;
	else {
		let capitalized = string.slice(0, 1).toUpperCase() + string.slice(1);
		return capitalized;
	}
}

export function reverseString(string) {
	return string.split('').reverse().join('');
}
