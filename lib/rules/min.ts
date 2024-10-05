import { RuleArguments } from '~/types';
import { isEmpty } from '../utils';

interface MinRuleArguments extends RuleArguments {
  value: number;
}

const min = ({ value }: MinRuleArguments) => (v: unknown) => {
  if (isEmpty(v)) return false;
  if (typeof v === 'number') {
    return v >= value;
  }
  if (Object.prototype.hasOwnProperty.call(v, 'length')) {
    return (v as { length: number }).length >= value;
  }
  return false;
};

export default min;
