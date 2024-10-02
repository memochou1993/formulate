import { expect, test } from 'vitest';
import alphaDash from './alphaDash';

test('Rule "alphaDash" should pass with valid input', () => {
  const validate = alphaDash();

  expect(validate('foo')).toBe(true);
});

test('Rule "alphaDash" should fail with invalid input', () => {
  const validate = alphaDash();

  expect(validate(undefined)).toBe(false);
  expect(validate('.')).toBe(false);
  expect(validate('@')).toBe(false);
});
