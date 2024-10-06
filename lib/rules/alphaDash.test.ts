import { describe, expect, test } from 'vitest';
import alphaDash from './alphaDash';

describe('Rule "alphaDash"', () => {
  test('should pass with valid input', () => {
    const validate = alphaDash();

    expect(validate('foo')).toBe(true);
    expect(validate('-')).toBe(true);
  });

  test('should fail with invalid input', () => {
    const validate = alphaDash();

    expect(validate(undefined)).toBe(false);
    expect(validate('@')).toBe(false);
    expect(validate('.')).toBe(false);
  });
});
