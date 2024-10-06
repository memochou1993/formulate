import { RuleArguments } from '~/types';
import { isEmpty } from '../utils';

export interface MinRuleArguments extends RuleArguments {
  value: number;
}

const min = ({ value }: MinRuleArguments) => (v: unknown) => {
  if (isEmpty(v)) return false;
  if (typeof v === 'number') {
    return v >= value;
  }
  if (typeof v === 'string' || Array.isArray(v)) {
    return v.length >= value;
  }
  if (v instanceof File) {
    return v.size >= value * 1024;
  }
  return false;
};

export default min;
