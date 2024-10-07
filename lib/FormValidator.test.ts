import { describe, expect, test } from 'vitest';
import plugin from '../plugin';
import FormValidator from './FormValidator';

describe('FormValidator', () => {
  test('should set the locale', () => {
    const validator = new FormValidator()
      .setLocale('zh-TW');

    expect(validator.getLocale()).toBe('zh-TW');
  });

  test('should set the fallback locale', () => {
    const validator = new FormValidator()
      .setFallbackLocale('zh-TW');

    expect(validator.getFallbackLocale()).toBe('zh-TW');
  });

  test('should throw an error for a non-existent default locale', () => {
    expect(() => new FormValidator({ locale: 'ja' }))
      .toThrowError('The "ja" locale is not registered.');
  });

  test('should throw an error for a non-existent fallback locale', () => {
    expect(() => new FormValidator({ fallbackLocale: 'ja' }))
      .toThrowError('The "ja" fallback locale is not registered.');
  });

  test('should validate with "required" rule', () => {
    const validator = new FormValidator()
      .defineField('Input')
      .required()
      .alphaDash();

    // Pass cases
    expect(validator.validate('foo')).toBe(true);

    // Fail cases
    expect(validator.validate(undefined)).toBe('The input field is required.');
    expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes and underscores.');
  });

  test('should validate without "required" rule', () => {
    const validator = new FormValidator()
      .defineField('Input')
      .alphaDash();

    // Pass cases
    expect(validator.validate(undefined)).toBe(true);
    expect(validator.validate('foo')).toBe(true);

    // Fail cases
    expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes and underscores.');
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
