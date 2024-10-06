import { RuleArguments } from '~/types';
import { isEmpty } from '~/utils';

export interface StartsWitchRuleArguments extends RuleArguments {
  values: string[];
}

const startsWith = ({ values }: StartsWitchRuleArguments) => (v: unknown) => {
  if (isEmpty(v)) return false;
  return values.some((value) => String(v).startsWith(value));
};

export default startsWith;
