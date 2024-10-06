import { RuleArguments } from '~/types';
import { isEmpty } from '~/utils';

export interface StartsWitchRuleArguments extends RuleArguments {
  values: string | string[];
}

const startsWith = ({ values }: StartsWitchRuleArguments) => (v: unknown) => {
  if (isEmpty(v)) return false;
  if (!Array.isArray(values)) values = [values];
  return values.some((value) => String(v).startsWith(value));
};

export default startsWith;
