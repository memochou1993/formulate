import { describe, expect, test } from 'vitest';
import plugin from '../plugin';
import FormValidator from './FormValidator';

describe('FormValidator', () => {
  test('should throw an error for a non-existent default locale', () => {
    const validator = new FormValidator({ defaultLocale: 'foo' })
      .defineField('Input');

    expect(() => validator.messages).toThrowError('The messages for the locale "foo" are missing.');
  });

  test('should throw an error for a non-existent fallback locale', () => {
    const validator = new FormValidator({ fallbackLocale: 'foo' })
      .defineField('Input');

    expect(() => validator.messages).toThrowError('The messages for the locale "foo" are missing.');
  });

  test('should validate with plugin', () => {
    const validator = new FormValidator()
      .registerPlugin(plugin)
      .defineField('Input')
      .apply('json');

    // Pass cases
    expect(validator.validate(undefined)).toBe(true);
    expect(validator.validate('{"foo":"bar"}')).toBe(true);

    // Fail cases
    expect(validator.validate('{"foo":"bar"')).toBe('The input field must be a valid JSON string.');
  });

  test('should validate with plugin and "required" rule', () => {
    const validator = new FormValidator()
      .registerPlugin(plugin)
      .defineField('Input')
      .required()
      .apply('json');

    // Pass cases
    expect(validator.validate('{"foo":"bar"}')).toBe(true);

    // Fail cases
    expect(validator.validate(undefined)).toBe('The input field is required.');
    expect(validator.validate('{"foo":"bar"')).toBe('The input field must be a valid JSON string.');
  });
});
