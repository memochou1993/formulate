import { MaxRuleArguments } from '~/rules/max';
import { MinRuleArguments } from '~/rules/min';
import { Messages } from '~/types';
import { formatNumber } from '~/utils';

const en: Messages = {
  alphaDash: (field) => `The ${field} field must only contain letters, numbers, dashes and underscores.`,
  alphaDashDot: (field) => `The ${field} field must only contain letters, numbers, dashes, underscores and dots.`,
  max: (field, { value }: MaxRuleArguments) => ({
    number: `The ${field} field must not be greater than ${formatNumber(value)}.`,
    string: `The ${field} field must not be greater than ${formatNumber(value as number)} characters.`,
    array: `The ${field} field must not be greater than ${formatNumber(value as number)} items.`,
  }),
  min: (field, { value }: MinRuleArguments) => ({
    number: `The ${field} field must be at least ${formatNumber(value as number)}.`,
    string: `The ${field} field must be at least ${formatNumber(value as number)} characters.`,
    array: `The ${field} field must be at least ${formatNumber(value as number)} items.`,
  }),
  required: (field) => `The ${field} field is required.`,
};

export default en;
