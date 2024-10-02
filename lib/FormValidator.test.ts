import { expect, test } from 'vitest';
import plugin from '../plugin';
import FormValidator from './FormValidator';

test('FormValidator with "required" rule', () => {
  const validator = new FormValidator()
    .defineField('input')
    .required()
    .alphaDash();

  // Pass cases
  expect(validator.validate('foo')).toBe(true);

  // Fail cases
  expect(validator.validate(undefined)).toBe('The input field is required.');
  expect(validator.validate('@')).toBe('The input field must only contain letters, digits, and underscores.');
});

test('FormValidator without "required" rule', () => {
  const validator = new FormValidator()
    .defineField('input')
    .alphaDash();

  // Pass cases
  expect(validator.validate(undefined)).toBe(true);
  expect(validator.validate('foo')).toBe(true);

  // Fail cases
  expect(validator.validate('@')).toBe('The input field must only contain letters, digits, and underscores.');
});

test('FormValidator with "when" condition set to true', () => {
  const validator = new FormValidator()
    .defineField('input')
    .when(true)
    .alphaDash();

  // Pass cases
  expect(validator.validate(undefined)).toBe(true);
  expect(validator.validate('foo')).toBe(true);

  // Fail cases
  expect(validator.validate('@')).toBe('The input field must only contain letters, digits, and underscores.');
});

test('FormValidator with "when" condition set to false', () => {
  const validator = new FormValidator()
    .defineField('input')
    .when(false)
    .alphaDash();

  // Pass cases
  expect(validator.validate(undefined)).toBe(true);
  expect(validator.validate('foo')).toBe(true);
  expect(validator.validate('@')).toBe(true);
});

test('FormValidator with "when" condition enabling a specific rule', () => {
  const validator = new FormValidator()
    .defineField('input')
    .when({ alphaDash: true })
    .required()
    .alphaDash();

  // Pass cases
  expect(validator.validate('foo')).toBe(true);

  // Fail cases
  expect(validator.validate(undefined)).toBe('The input field is required.');
  expect(validator.validate('@')).toBe('The input field must only contain letters, digits, and underscores.');
});

test('FormValidator with "when" condition disabling a specific rule', () => {
  const validator = new FormValidator()
    .defineField('input')
    .when({ alphaDash: false })
    .required()
    .alphaDash();

  // Pass cases
  expect(validator.validate('foo')).toBe(true);
  expect(validator.validate('@')).toBe(true);

  // Fail cases
  expect(validator.validate(undefined)).toBe('The input field is required.');
});

test('FormValidator with plugin and "required" rule', () => {
  const validator = new FormValidator()
    .registerPlugin(plugin)
    .defineField('input')
    .required()
    .use('json');

  // Pass cases
  expect(validator.validate('{"foo":"bar"}')).toBe(true);

  // Fail cases
  expect(validator.validate(undefined)).toBe('The input field is required.');
  expect(validator.validate('{"foo":"bar"')).toBe('The input field must be a valid JSON string.');
});

test('FormValidator with plugin without "required" rule', () => {
  const validator = new FormValidator()
    .registerPlugin(plugin)
    .defineField('input')
    .use('json');

  // Pass cases
  expect(validator.validate(undefined)).toBe(true);
  expect(validator.validate('{"foo":"bar"}')).toBe(true);

  // Fail cases
  expect(validator.validate('{"foo":"bar"')).toBe('The input field must be a valid JSON string.');
});

test('FormValidator with plugin without "required" rule', () => {
  const validator = new FormValidator()
    .registerPlugin(plugin)
    .defineField('input')
    .use('json');

  // Pass cases
  expect(validator.validate(undefined)).toBe(true);
  expect(validator.validate('{"foo":"bar"}')).toBe(true);

  // Fail cases
  expect(validator.validate('{"foo":"bar"')).toBe('The input field must be a valid JSON string.');
});
