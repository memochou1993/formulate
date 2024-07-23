import { isEmpty } from '../utils';

const required = () => (v: unknown) => {
  return !isEmpty(v);
};

export default required;
