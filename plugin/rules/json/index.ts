import { isEmpty } from '~/utils';

const json = () => (v: unknown) => {
  if (isEmpty(v)) return false;
  try {
    JSON.parse(v as string);
    return true;
  } catch {
    return false;
  }
};

export default json;
