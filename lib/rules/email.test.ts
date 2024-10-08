import { describe, expect, test } from 'vitest';
import email from './email';

describe('Rule "email"', () => {
  const validate = email();

  test('should pass with valid input', () => {
    expect(validate('foo@example.com')).toBe(true);
    expect(validate('foo.bar@example.com')).toBe(true);
    expect(validate('foo_bar@example.com')).toBe(true);
    expect(validate('foo%bar@example.com')).toBe(true);
    expect(validate('foo+bar@example.com')).toBe(true);
    expect(validate('foo-bar@example.com')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('foo')).toBe(false);
    expect(validate('@example.com')).toBe(false);
    expect(validate('foo@.com')).toBe(false);
    expect(validate('foo@example.')).toBe(false);
    expect(validate('foo@example.c')).toBe(false);
    expect(validate('foo@example.00')).toBe(false);
  });
});
