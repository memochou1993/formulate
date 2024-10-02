import { expect, test } from 'vitest';
import FormValidator from './FormValidator';

test('validator with prerequisite rule "required"', () => {
  const v = new FormValidator()
    .defineField('title')
    .required()
    .alphaDash();

  // should pass
  expect(v.validate('hello')).toBe(true);
  // should fail
  expect(v.validate(undefined)).toBe('The title field is required.');
  expect(v.validate('@')).toBe('The title field must only contain letters, digits and underscores.');
});

test('validator without prerequisite rule "required"', () => {
  const v = new FormValidator()
    .defineField('title')
    .alphaDash();

  // should pass
  expect(v.validate(undefined)).toBe(true);
  expect(v.validate('hello')).toBe(true);
  // should fail
  expect(v.validate('@')).toBe('The title field must only contain letters, digits and underscores.');
});

test('validator with "when" condition set to true', () => {
  const v = new FormValidator()
    .defineField('title')
    .when(true)
    .alphaDash();

  // should pass
  expect(v.validate(undefined)).toBe(true);
  expect(v.validate('hello')).toBe(true);
  // should fail
  expect(v.validate('@')).toBe('The title field must only contain letters, digits and underscores.');
});

test('validator with "when" condition set to false', () => {
  const v = new FormValidator()
    .defineField('title')
    .when(false)
    .alphaDash();

  // should pass
  expect(v.validate(undefined)).toBe(true);
  expect(v.validate('hello')).toBe(true);
  expect(v.validate('@')).toBe(true);
});

test('validator with "when" condition object enabling specific rule', () => {
  const v = new FormValidator()
    .defineField('title')
    .when({ alphaDash: true })
    .required()
    .alphaDash();

  // should pass
  expect(v.validate('hello')).toBe(true);
  // should fail
  expect(v.validate(undefined)).toBe('The title field is required.');
  expect(v.validate('@')).toBe('The title field must only contain letters, digits and underscores.');
});

test('validator with "when" condition object disabling specific rule', () => {
  const v = new FormValidator()
    .defineField('title')
    .when({ alphaDash: false })
    .required()
    .alphaDash();

  // should pass
  expect(v.validate('hello')).toBe(true);
  expect(v.validate('@')).toBe(true);
  // should fail
  expect(v.validate(undefined)).toBe('The title field is required.');
});
