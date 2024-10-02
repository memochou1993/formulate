import Rule from '../types/Rule';
import { isEmpty } from '../utils';

const required: Rule = () => (v: unknown) => {
  return !isEmpty(v);
};

export default required;
