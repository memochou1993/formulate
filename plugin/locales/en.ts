import { Locale } from '~/types';

const en: Locale = {
  json: ({ fieldName }) => `The ${fieldName} field must be a valid JSON string.`,
};

export default en;
