import { RuleArguments } from '~/types';
import { isEmpty } from '~/utils';

export interface EndsWithRuleArguments extends RuleArguments {
  values: string[] | string;
}

const endsWith = ({ values }: EndsWithRuleArguments) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (!Array.isArray(values)) values = [values];
  return values.some((value) => String(input).endsWith(value));
};

export default endsWith;
