import { expect, test } from 'vitest';
import Validator from './Validator';

test('validator with rule "required"', () => {
  const v = new Validator()
    .defineField('title')
    .required();

  // should pass
  expect(v.validate('foo')).toBe(true);
  
  // should fail
  expect(v.validate(undefined)).toBe('The title field is required.');
});
