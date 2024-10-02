import { Rule } from '~/types';
import alphaDash from './alphaDash';
import alphaDashDot from './alphaDashDot';
import required from './required';

const locales: {
  [key: string]: Rule;
} = {
  required,
  alphaDash,
  alphaDashDot,
};

export default locales;
