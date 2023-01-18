import { capitalize, reverseString, add, subtract } from './script.js';

// capitalize function

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

// reverseString function

test('returns given string reversed', () => {
	expect(reverseString('hello')).toEqual('olleh');
	expect(reverseString('james kane')).toEqual('enak semaj');
	expect(reverseString('i like coding')).toEqual('gnidoc ekil i');
	expect(reverseString('123456789')).toEqual('987654321');
});

// calculator functions

test('adds two given integers', () => {
	expect(add(2, 2)).toEqual(4);
	expect(add(25, 32)).toEqual(57);
	expect(add(267, 987)).toEqual(1254);
});

test('subtracts two given integers', () => {
	expect(subtract(2, 2)).toEqual(0);
	expect(subtract(32, 27)).toEqual(5);
	expect(subtract(987, 267)).toEqual(720);
});
