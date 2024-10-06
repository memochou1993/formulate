import { RuleArguments } from '~/types';
import { isEmpty } from '~/utils';

export interface NotInRuleArguments extends RuleArguments {
  values: unknown[];
}

const notIn = ({ values }: NotInRuleArguments) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return !values.some((value) => value === input);
};

export default notIn;
