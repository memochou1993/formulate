import { expect, test } from 'vitest';
import alphaDashDot from './alphaDashDot';

test('Rule "alphaDashDot" should pass with valid input', () => {
  const validate = alphaDashDot();

  expect(validate('foo')).toBe(true);
  expect(validate('.')).toBe(true);
});

test('Rule "alphaDashDot" should fail with invalid input', () => {
  const validate = alphaDashDot();

  expect(validate(undefined)).toBe(false);
  expect(validate('@')).toBe(false);
});
