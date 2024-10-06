import { describe, expect, test } from 'vitest';
import FieldValidator from './FieldValidator';
import defaultLocales from './locales';
import defaultRules from './rules';

const defaultParams = {
  name: 'Input',
  locale: 'en',
  locales: defaultLocales,
  rules: defaultRules,
};

describe('FieldValidator', () => {
  test('should throw an error for a non-existent locale', () => {
    const validator = new FieldValidator({
      name: 'Input',
      locale: 'foo',
      locales: defaultLocales,
      rules: defaultRules,
    });

    expect(() => validator.getMessage('required')).toThrowError('The messages for the "foo" locale are missing.');
  });

  test('should throw an error for a non-existent message', () => {
    const validator = new FieldValidator({
      name: 'Input',
      locale: 'en',
      locales: defaultLocales,
      rules: defaultRules,
    });

    expect(() => validator.getMessage('foo')).toThrowError('The message for the "foo" rule is missing.');
  });

  test('should throw an error for a non-existent rule', () => {
    const validator = new FieldValidator({
      name: 'Input',
      locale: 'en',
      locales: defaultLocales,
      rules: defaultRules,
    });

    expect(() => validator.getRule('foo')).toThrowError('The "foo" rule does not exist.');
  });

  test('should validate with "required" and "alphaDash" rules', () => {
    const validator = new FieldValidator(defaultParams)
      .required()
      .alphaDash();

    // Pass cases
    expect(validator.validate('foo')).toBe(true);

    // Fail cases
    expect(validator.validate(undefined)).toBe('The input field is required.');
    expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes and underscores.');
  });

  test('should validate without "required" rule with "alphaDash" rule', () => {
    const validator = new FieldValidator(defaultParams)
      .alphaDash();

    // Pass cases
    expect(validator.validate(undefined)).toBe(true);
    expect(validator.validate('foo')).toBe(true);

    // Fail cases
    expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes and underscores.');
  });

  test('should validate with "when" condition set to true', () => {
    const validator = new FieldValidator(defaultParams)
      .when(true)
      .alphaDash();

    // Pass cases
    expect(validator.validate(undefined)).toBe(true);
    expect(validator.validate('foo')).toBe(true);

    // Fail cases
    expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes and underscores.');
  });

  test('should validate with "when" condition set to false', () => {
    const validator = new FieldValidator(defaultParams)
      .when(false)
      .alphaDash();

    expect(validator.validate(undefined)).toBe(true);
    expect(validator.validate('foo')).toBe(true);
    expect(validator.validate('@')).toBe(true);
  });

  test('should validate with "when" condition enabling a specific rule', () => {
    const validator = new FieldValidator(defaultParams)
      .when({ alphaDash: true })
      .required()
      .alphaDash();

    // Pass cases
    expect(validator.validate('foo')).toBe(true);

    // Fail cases
    expect(validator.validate(undefined)).toBe('The input field is required.');
    expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes and underscores.');
  });

  test('should validate with "when" condition disabling a specific rule', () => {
    const validator = new FieldValidator(defaultParams)
      .when({ alphaDash: false })
      .required()
      .alphaDash();

    // Pass cases
    expect(validator.validate('foo')).toBe(true);
    expect(validator.validate('@')).toBe(true);

    // Fail cases
    expect(validator.validate(undefined)).toBe('The input field is required.');
  });

  test('should validate with "alphaDash" rule', () => {
    const validator = new FieldValidator(defaultParams)
      .alphaDash();

    expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes and underscores.');
  });

  test('should validate with "alphaDashDot" rule', () => {
    const validator = new FieldValidator(defaultParams)
      .alphaDashDot();

    expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes, underscores and dots.');
  });

  test('should validate with "max" rule', () => {
    const validator = new FieldValidator(defaultParams)
      .max(10);

    expect(validator.validate(11)).toBe('The input field must not be greater than 10.');
    expect(validator.validate('_'.repeat(11))).toBe('The input field must not be greater than 10 characters.');
    expect(validator.validate(Array.from('_'.repeat(11)))).toBe('The input field must not be greater than 10 items.');
    expect(validator.validate(new File(['_'.repeat(11 * 1024)], ''))).toBe('The input field must not be greater than 10 kilobytes.');
  });

  test('should validate with "min" rule', () => {
    const validator = new FieldValidator(defaultParams)
      .min(10);

    expect(validator.validate(9)).toBe('The input field must be at least 10.');
    expect(validator.validate('_'.repeat(9))).toBe('The input field must be at least 10 characters.');
    expect(validator.validate(Array.from('_'.repeat(9)))).toBe('The input field must be at least 10 items.');
    expect(validator.validate(new File(['_'.repeat(9 * 1024)], ''))).toBe('The input field must be at least 10 kilobytes.');
  });
});
