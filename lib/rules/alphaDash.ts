import { Rule } from '~/types';
import { isEmpty } from '~/utils';

const alphaDash: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return /^[a-zA-Z0-9-_]+$/.test(String(input));
};

export default alphaDash;
