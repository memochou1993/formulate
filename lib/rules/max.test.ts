import { expect, test } from 'vitest';
import max from './max';

test('Rule "max" should pass with valid input', () => {
  const validate = max({ value: 10 });

  expect(validate(10)).toBe(true);
  expect(validate('0'.repeat(10))).toBe(true);
  expect(validate(Array.from('0'.repeat(10)))).toBe(true);
});

test('Rule "max" should fail with invalid input', () => {
  const validate = max({ value: 10 });

  expect(validate(undefined)).toBe(false);
  expect(validate(11)).toBe(false);
  expect(validate('0'.repeat(11))).toBe(false);
  expect(validate(Array.from('0'.repeat(11)))).toBe(false);
});
