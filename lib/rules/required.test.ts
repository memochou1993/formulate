import { describe, expect, test } from 'vitest';
import required from './required';

describe('Rule "alphaDash"', () => {
  test('should pass with valid input', () => {
    const v = required();

    expect(v('foo')).toBe(true);
    expect(v(true)).toBe(true);
    expect(v(false)).toBe(true);
    expect(v(1)).toBe(true);
    expect(v(0)).toBe(true);
    expect(v({})).toBe(true);
  });

  test('should fail with invalid input', () => {
    const v = required();

    expect(v(undefined)).toBe(false);
    expect(v(null)).toBe(false);
    expect(v('')).toBe(false);
    expect(v([])).toBe(false);
  });
});
