import { describe, expect, test } from 'vitest';
import endsWith from './endsWith';

describe('Rule "endsWith"', () => {
  const validate = endsWith({ values: ['foo', 'bar'] });

  test('should pass with valid input', () => {
    expect(validate('_foo')).toBe(true);
    expect(validate('_bar')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('_')).toBe(false);
  });
});
