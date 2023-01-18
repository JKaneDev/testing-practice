import { capitalize, reverseString } from './script.js';

test('capitalize, take a string a return first character capitalized', () => {
	expect(capitalize('hello')).toEqual('Hello');
	expect(capitalize('world')).toEqual('World');
	expect(capitalize('some')).toEqual('Some');
});

test('returns empty string when passed an empty string', () => {
	expect(capitalize('')).toBe('');
});

test('returns the same string when passed a number', () => {
	expect(capitalize('123')).toBe('123');
});

test('returns the same string when passed special characters', () => {
	expect(capitalize('!@#')).toBe('!@#');
});

test('returns given string reversed', () => {
	expect(reverseString('hello').toEqual('olleh'));
	expect(reverseString('hello').toEqual('enak semaj'));
	expect(reverseString('i like coding').toEqual('gnidoc ekil i'));
	expect(reverseString('123456789').toEqual('987654321'));
});
