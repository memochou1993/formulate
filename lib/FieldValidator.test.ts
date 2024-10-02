import { expect, test } from 'vitest';
import FieldValidator from './FieldValidator';
import defaultLocales from './locales';
import defaultRules from './rules';

test('FieldValidator should throw an error for a non-existent locale', () => {
  const validator = new FieldValidator({
    name: 'Input',
    locale: 'foo',
    locales: defaultLocales,
    rules: defaultRules,
  });

  // Pass cases
  expect(() => validator.getMessage('required')).toThrowError('The messages for the locale "foo" are missing.');
});

test('FieldValidator should throw an error for a non-existent message', () => {
  const validator = new FieldValidator({
    name: 'Input',
    locale: 'en',
    locales: defaultLocales,
    rules: defaultRules,
  });

  // Pass cases
  expect(() => validator.getMessage('foo')).toThrowError('The message for the rule "foo" is missing.');
});

test('FieldValidator should throw an error for a non-existent rule', () => {
  const validator = new FieldValidator({
    name: 'Input',
    locale: 'en',
    locales: defaultLocales,
    rules: defaultRules,
  });

  // Pass cases
  expect(() => validator.getRule('foo')).toThrowError('The rule "foo" does not exist.');
});
