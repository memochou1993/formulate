import { Rule } from '~/types';
import { isEmpty } from '~/utils';

const lowercase: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return String(input) === String(input).toLowerCase();
};

export default lowercase;
