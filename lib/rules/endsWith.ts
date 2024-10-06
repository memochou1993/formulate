import { RuleArguments } from '~/types';
import { isEmpty } from '~/utils';

export interface EndsWitchRuleArguments extends RuleArguments {
  values: string | string[];
}

const endsWith = ({ values }: EndsWitchRuleArguments) => (v: unknown) => {
  if (isEmpty(v)) return false;
  if (!Array.isArray(values)) values = [values];
  return values.some((value) => String(v).endsWith(value));
};

export default endsWith;
