import { Rule } from '~/types';
import { isEmpty } from '~/utils';

const required: Rule = () => (v: unknown) => {
  return !isEmpty(v);
};

export default required;
