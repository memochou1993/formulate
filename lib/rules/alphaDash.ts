import { Rule } from '~/types';
import { isEmpty } from '../utils';

const alphaDash: Rule = () => (v: unknown) => {
  if (isEmpty(v)) return false;
  return /^[a-zA-Z0-9-_]+$/.test(String(v));
};

export default alphaDash;
