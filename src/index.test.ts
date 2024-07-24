import { expect, test } from 'vitest';
import validator from '.';

test('validator with rule "required"', () => {
  const v = validator
    .defineField('title')
    .required();

  // should pass
  expect(v.validate('foo')).toBe(true);
  
  // should fail
  expect(v.validate(undefined)).toBe('The title field is required.');
  expect(v.validate('undefined')).toBe(true);
});
