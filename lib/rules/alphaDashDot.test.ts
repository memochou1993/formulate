import { expect, test } from 'vitest';
import alphaDashDot from './alphaDashDot';

test('rule "alphaDashDot" with valid input should pass', () => {
  const validate = alphaDashDot();
  expect(validate('foo')).toBe(true);
  expect(validate('.')).toBe(true);
});

test('rule "alphaDashDot" with invalid input should fail', () => {
  const validate = alphaDashDot();
  expect(validate(undefined)).toBe(false);
  expect(validate('@')).toBe(false);
});
