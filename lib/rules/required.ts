import { Rule } from '~/types';
import { isEmpty } from '~/utils';

const required: Rule = () => (input: unknown) => {
  return !isEmpty(input);
};

export default required;
