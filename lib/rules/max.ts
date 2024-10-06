import { RuleArguments } from '~/types';
import { isEmpty } from '../utils';

export interface MaxRuleArguments extends RuleArguments {
  max: number;
}

const min = ({ max }: MaxRuleArguments) => (v: unknown) => {
  if (isEmpty(v)) return false;
  if (typeof v === 'number') {
    return v <= max;
  }
  if (typeof v === 'string' || Array.isArray(v)) {
    return v.length <= max;
  }
  if (v instanceof File) {
    return v.size <= max * 1024;
  } 
  return false;
};

export default min;
