import { RuleArguments } from '~/types';
import { isEmpty } from '../utils';

export interface MinRuleArguments extends RuleArguments {
  min: number;
}

const min = ({ min }: MinRuleArguments) => (v: unknown) => {
  if (isEmpty(v)) return false;
  if (typeof v === 'number') {
    return v >= min;
  }
  if (typeof v === 'string' || Array.isArray(v)) {
    return v.length >= min;
  }
  if (v instanceof File) {
    return v.size >= min * 1024;
  }
  return false;
};

export default min;
