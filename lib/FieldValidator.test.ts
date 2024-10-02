import { expect, test } from 'vitest';
import FieldValidator from './FieldValidator';

test('FieldValidator with a non-existent locale message', () => {
  const validator = new FieldValidator('input', 'en');

  // Pass cases
  expect(() => validator.getLocaleMessage('foo')).toThrowError('The locale message for the rule "foo" is missing.');
});

test('FieldValidator with a non-existent rule', () => {
  const validator = new FieldValidator('input', 'en');

  // Pass cases
  expect(() => validator.getRule('foo')).toThrowError('The rule "foo" does not exist.');
});
