import { MaxRuleArguments } from '~/rules/max';
import { MinRuleArguments } from '~/rules/min';
import { Messages } from '~/types';
import { formatNumber } from '~/utils';

const en: Messages = {
  alphaDash: (field) => `The ${field} field must only contain letters, numbers, dashes and underscores.`,
  alphaDashDot: (field) => `The ${field} field must only contain letters, numbers, dashes, underscores and dots.`,
  max: (field, { value }: MaxRuleArguments) => ({
    array: `The ${field} field must not be greater than ${formatNumber(value)} items.`,
    file: `The ${field} field must not be greater than ${formatNumber(value)} kilobytes.`,
    number: `The ${field} field must not be greater than ${formatNumber(value)}.`,
    string: `The ${field} field must not be greater than ${formatNumber(value)} characters.`,
  }),
  min: (field, { value }: MinRuleArguments) => ({
    array: `The ${field} field must be at least ${formatNumber(value)} items.`,
    file: `The ${field} field must be at least ${formatNumber(value)} kilobytes.`,
    number: `The ${field} field must be at least ${formatNumber(value)}.`,
    string: `The ${field} field must be at least ${formatNumber(value)} characters.`,
  }),
  required: (field) => `The ${field} field is required.`,
};

export default en;
