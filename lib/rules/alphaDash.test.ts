import { expect, test } from 'vitest';
import alphaDash from './alphaDash';

test('rule "alphaDash" with valid input should pass', () => {
  const validate = alphaDash();
  expect(validate('foo')).toBe(true);
});

test('rule "alphaDash" with invalid input should fail', () => {
  const validate = alphaDash();
  expect(validate(undefined)).toBe(false);
  expect(validate('.')).toBe(false);
  expect(validate('@')).toBe(false);
});
