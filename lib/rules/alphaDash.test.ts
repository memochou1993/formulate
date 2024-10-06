import { describe, expect, test } from 'vitest';
import alphaDash from './alphaDash';

describe('Rule "alphaDash"', () => {
  const validate = alphaDash();

  test('should pass with valid input', () => {
    expect(validate('foo')).toBe(true);
    expect(validate('-')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('@')).toBe(false);
    expect(validate('.')).toBe(false);
  });
});
