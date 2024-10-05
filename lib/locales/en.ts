import { Locale } from '~/types';
import { formatNumber } from '~/utils';

const en: Locale = {
  alphaDash: ({ fieldName }) => `The ${fieldName} field must only contain letters, numbers, dashes and underscores.`,
  alphaDashDot: ({ fieldName }) => `The ${fieldName} field must only contain letters, numbers, dashes, underscores and dots.`,
  max: ({ fieldName, value }) => `The ${fieldName} field must not be greater than ${formatNumber(value as number)}.`,
  min: ({ fieldName, value }) => `The ${fieldName} field must be at least ${formatNumber(value as number)}.`,
  required: ({ fieldName }) => `The ${fieldName} field is required.`,
};

export default en;
