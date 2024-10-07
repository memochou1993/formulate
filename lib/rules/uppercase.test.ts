import { describe, expect, test } from 'vitest';
import uppercase from './uppercase';

describe('Rule "uppercase"', () => {
  const validate = uppercase();

  test('should pass with valid input', () => {
    expect(validate('FOO')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('Foo')).toBe(false);
    expect(validate('foo')).toBe(false);
  });
});
