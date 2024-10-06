import { RuleArguments } from '~/types';
import { isEmpty } from '../utils';
import max from './max';
import min from './min';

export interface BetweenRuleArguments extends RuleArguments {
  min: number;
  max: number;
}

const between = ({ min: minValue, max: maxValue }: BetweenRuleArguments) => (v: unknown) => {
  if (isEmpty(v)) return false;
  return min({ min: minValue })(v) && max({ max: maxValue })(v);
};

export default between;
