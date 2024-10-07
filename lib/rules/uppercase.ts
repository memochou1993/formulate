import { Rule } from '~/types';
import { isEmpty } from '~/utils';

const uppercase: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return String(input) === String(input).toUpperCase();
};

export default uppercase;
