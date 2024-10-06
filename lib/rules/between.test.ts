import { expect, test } from 'vitest';
import between from './between';

test('Rule "between" should pass with valid input', () => {
  const validate = between({ min: 10, max: 20 });

  expect(validate(15)).toBe(true);
  expect(validate('_'.repeat(15))).toBe(true);
  expect(validate(Array.from('_'.repeat(15)))).toBe(true);
  expect(validate(new File(['_'.repeat(15 * 1024)], ''))).toBe(true);
});

test('Rule "between" should fail with invalid input', () => {
  const validate = between({ min: 10, max: 20 });

  expect(validate(undefined)).toBe(false);
  expect(validate(9)).toBe(false);
  expect(validate('_'.repeat(9))).toBe(false);
  expect(validate(Array.from('_'.repeat(9)))).toBe(false);
  expect(validate(new File(['_'.repeat(9 * 1024)], ''))).toBe(false);

  expect(validate(undefined)).toBe(false);
  expect(validate(21)).toBe(false);
  expect(validate('_'.repeat(21))).toBe(false);
  expect(validate(Array.from('_'.repeat(21)))).toBe(false);
  expect(validate(new File(['_'.repeat(21 * 1024)], ''))).toBe(false);
});
