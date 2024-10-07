import { describe, expect, test } from 'vitest';
import lowercase from './lowercase';

describe('Rule "lowercase"', () => {
  const validate = lowercase();

  test('should pass with valid input', () => {
    expect(validate('foo')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('Foo')).toBe(false);
    expect(validate('FOO')).toBe(false);
  });
});
