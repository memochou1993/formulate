import { expect, test } from 'vitest';
import required from './required';

test('rule "required" with valid input should pass', () => {
  const validate = required();
  expect(validate('foo')).toBe(true);
  expect(validate(true)).toBe(true);
  expect(validate(false)).toBe(true);
  expect(validate(1)).toBe(true);
  expect(validate(0)).toBe(true);
  expect(validate({})).toBe(true);
});

test('rule "required" with invalid input should fail', () => {
  const validate = required();
  expect(validate(undefined)).toBe(false);
  expect(validate(null)).toBe(false);
  expect(validate('')).toBe(false);
  expect(validate([])).toBe(false);
});
