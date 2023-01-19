import * as CryptoJS from 'crypto-js';

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

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;

export function caesar(string, shift) {
	let result = '';
	for (let i = 0; i < string.length; i++) {
		let charCode = string.charCodeAt(i);
		if (charCode >= 65 && charCode <= 90) {
			result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
		} else if (charCode >= 97 && charCode <= 122) {
			result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
		} else {
			result += string[i];
		}
	}
	return result;
}

export function analyze(array) {
	const length = array.length;
	const average = Math.round(
		[...array].reduce((acc, val) => acc + val, 0) / length
	);
	const min = Math.min(...array);
	const max = Math.max(...array);

	return {
		length,
		average,
		min,
		max,
	};
}
