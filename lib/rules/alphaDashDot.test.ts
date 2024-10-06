import { describe, expect, test } from 'vitest';
import alphaDashDot from './alphaDashDot';

describe('Rule "alphaDash"', () => {
  test('should pass with valid input', () => {
    const validate = alphaDashDot();

    expect(validate('foo')).toBe(true);
    expect(validate('-')).toBe(true);
    expect(validate('.')).toBe(true);
  });

  test('should fail with invalid input', () => {
    const validate = alphaDashDot();

    expect(validate(undefined)).toBe(false);
    expect(validate('@')).toBe(false);
  });
});
