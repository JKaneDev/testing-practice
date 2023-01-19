import {
	capitalize,
	reverseString,
	add,
	subtract,
	multiply,
	divide,
	caesar,
} from './script.js';

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

test('multiplies two integers', () => {
	expect(multiply(2, 2)).toEqual(4);
	expect(multiply(12, 12)).toEqual(144);
	expect(multiply(123, 67)).toEqual(8241);
});

test('divides two integers', () => {
	expect(divide(2, 2)).toEqual(1);
	expect(divide(144, 12)).toEqual(12);
	expect(divide(7936, 64)).toEqual(124);
});

test('applies caesar cipher to string, shifts characters by given value', () => {
	expect(caesar('james', 1)).toEqual('kbnft');
});

test('expect caesar to wrap from z to a', () => {
	expect(caesar('z', 1)).toBe('a');
});

test('caesar deals with punctuation correctly', () => {
	expect(caesar(',', 1)).toBe(',');
});
