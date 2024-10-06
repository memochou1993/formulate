import { Rule } from '~/types';
import { isEmpty } from '~/utils';

const alphaDashDot: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return /^[a-zA-Z0-9-_.]+$/.test(String(input));
};

export default alphaDashDot;
