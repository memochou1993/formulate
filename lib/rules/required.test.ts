import { describe, expect, test } from 'vitest';
import required from './required';

describe('Rule "alphaDash"', () => {
  const validate = required();

  test('should pass with valid input', () => {
    expect(validate('foo')).toBe(true);
    expect(validate(true)).toBe(true);
    expect(validate(false)).toBe(true);
    expect(validate(1)).toBe(true);
    expect(validate(0)).toBe(true);
    expect(validate({})).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate(null)).toBe(false);
    expect(validate('')).toBe(false);
    expect(validate([])).toBe(false);
  });
});
