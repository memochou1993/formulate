import { expect, test } from 'vitest';
import plugin from '../plugin';
import FormValidator from './FormValidator';

test('FormValidator should throw an error for a non-existent default locale', () => {
  const validator = new FormValidator({ defaultLocale: 'foo' })
    .defineField('Input');

  // Pass cases
  expect(() => validator.messages).toThrowError('The messages for the locale "foo" are missing.');
});

test('FormValidator should throw an error for a non-existent fallback locale', () => {
  const validator = new FormValidator({ fallbackLocale: 'foo' })
    .defineField('Input');

  // Pass cases
  expect(() => validator.messages).toThrowError('The messages for the locale "foo" are missing.');
});

test('FormValidator should work with "required" rule', () => {
  const validator = new FormValidator()
    .defineField('Input')
    .required()
    .alphaDash();

  // Pass cases
  expect(validator.validate('foo')).toBe(true);

  // Fail cases
  expect(validator.validate(undefined)).toBe('The input field is required.');
  expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes and underscores.');
});

test('FormValidator should work without "required" rule', () => {
  const validator = new FormValidator()
    .defineField('Input')
    .alphaDash();

  // Pass cases
  expect(validator.validate(undefined)).toBe(true);
  expect(validator.validate('foo')).toBe(true);

  // Fail cases
  expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes and underscores.');
});

test('FormValidator should work with "when" condition set to true', () => {
  const validator = new FormValidator()
    .defineField('Input')
    .when(true)
    .alphaDash();

  // Pass cases
  expect(validator.validate(undefined)).toBe(true);
  expect(validator.validate('foo')).toBe(true);

  // Fail cases
  expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes and underscores.');
});

test('FormValidator should work with "when" condition set to false', () => {
  const validator = new FormValidator()
    .defineField('Input')
    .when(false)
    .alphaDash();

  // Pass cases
  expect(validator.validate(undefined)).toBe(true);
  expect(validator.validate('foo')).toBe(true);
  expect(validator.validate('@')).toBe(true);
});

test('FormValidator should work with "when" condition enabling a specific rule', () => {
  const validator = new FormValidator()
    .defineField('Input')
    .when({ alphaDash: true })
    .required()
    .alphaDash();

  // Pass cases
  expect(validator.validate('foo')).toBe(true);

  // Fail cases
  expect(validator.validate(undefined)).toBe('The input field is required.');
  expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes and underscores.');
});

test('FormValidator should work with "when" condition disabling a specific rule', () => {
  const validator = new FormValidator()
    .defineField('Input')
    .when({ alphaDash: false })
    .required()
    .alphaDash();

  // Pass cases
  expect(validator.validate('foo')).toBe(true);
  expect(validator.validate('@')).toBe(true);

  // Fail cases
  expect(validator.validate(undefined)).toBe('The input field is required.');
});

test('FormValidator should work with plugin and "required" rule', () => {
  const validator = new FormValidator()
    .registerPlugin(plugin)
    .defineField('Input')
    .required()
    .apply('json');

  // Pass cases
  expect(validator.validate('{"foo":"bar"}')).toBe(true);

  // Fail cases
  expect(validator.validate(undefined)).toBe('The input field is required.');
  expect(validator.validate('{"foo":"bar"')).toBe('The input field must be a valid JSON string.');
});

test('FormValidator should work with plugin without "required" rule', () => {
  const validator = new FormValidator()
    .registerPlugin(plugin)
    .defineField('Input')
    .apply('json');

  // Pass cases
  expect(validator.validate(undefined)).toBe(true);
  expect(validator.validate('{"foo":"bar"}')).toBe(true);

  // Fail cases
  expect(validator.validate('{"foo":"bar"')).toBe('The input field must be a valid JSON string.');
});

test('FormValidator should work with plugin without "required" rule', () => {
  const validator = new FormValidator()
    .registerPlugin(plugin)
    .defineField('Input')
    .apply('json');

  // Pass cases
  expect(validator.validate(undefined)).toBe(true);
  expect(validator.validate('{"foo":"bar"}')).toBe(true);

  // Fail cases
  expect(validator.validate('{"foo":"bar"')).toBe('The input field must be a valid JSON string.');
});

test('FormValidator should work with "alphaDash" rule', () => {
  const validator = new FormValidator()
    .defineField('Input')
    .alphaDash();

  // Fail cases
  expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes and underscores.');
});

test('FormValidator should work with "alphaDashDot" rule', () => {
  const validator = new FormValidator()
    .defineField('Input')
    .alphaDashDot();

  // Fail cases
  expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes, underscores and dots.');
});

test('FormValidator should work with "max" rule', () => {
  const validator = new FormValidator()
    .defineField('Input')
    .max(10);

  // Fail cases
  expect(validator.validate(11)).toBe('The input field must not be greater than 10.');
  expect(validator.validate('_'.repeat(11))).toBe('The input field must not be greater than 10 characters.');
  expect(validator.validate(Array.from('_'.repeat(11)))).toBe('The input field must not be greater than 10 items.');
});

test('FormValidator should work with "min" rule', () => {
  const validator = new FormValidator()
    .defineField('Input')
    .min(10);

  // Fail cases
  expect(validator.validate(9)).toBe('The input field must be at least 10.');
  expect(validator.validate('_'.repeat(9))).toBe('The input field must be at least 10 characters.');
  expect(validator.validate(Array.from('_'.repeat(9)))).toBe('The input field must be at least 10 items.');
});
