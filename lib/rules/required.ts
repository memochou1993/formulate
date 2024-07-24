import Rule from '../types/Rule';
import { isEmpty } from '../utils';

const required: Rule = () => (v) => {
  return !isEmpty(v);
};

export default required;
