import { LocaleMessages } from '~/types';

const en: LocaleMessages = {
  required: (field: string) => `The ${field} field is required.`,
  alphaDash: field => `The ${field} field must only contain letters, digits and underscores.`,
  alphaDashDot: field => `The ${field} field must only contain letters, digits, underscores and dots.`,
};

export default en;
