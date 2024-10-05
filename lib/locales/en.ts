import { Messages } from '~/types';
import { formatNumber } from '~/utils';

const en: Messages = {
  alphaDash: (field) => `The ${field} field must only contain letters, numbers, dashes and underscores.`,
  alphaDashDot: (field) => `The ${field} field must only contain letters, numbers, dashes, underscores and dots.`,
  max: (field, { value }) => `The ${field} field must not be greater than ${formatNumber(value as number)}.`,
  min: (field, { value }) => `The ${field} field must be at least ${formatNumber(value as number)}.`,
  required: (field) => `The ${field} field is required.`,
};

export default en;
