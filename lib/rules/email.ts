import { Rule } from '~/types';
import { isEmpty } from '~/utils';

const email: Rule = () => (v: unknown) => {
  if (isEmpty(v)) return false;
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(String(v));
};

export default email;
