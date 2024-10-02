import { Locale } from '~/types';

const en: Locale = {
  alphaDash: ({ fieldName }) => `The ${fieldName} field must only contain letters, digits, and underscores.`,
  alphaDashDot: ({ fieldName }) => `The ${fieldName} field must only contain letters, digits, underscores, and dots.`,
  required: ({ fieldName }) => `The ${fieldName} field is required.`,
};

export default en;
