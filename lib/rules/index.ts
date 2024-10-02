import { Rules } from '~/types';
import alphaDash from './alphaDash';
import alphaDashDot from './alphaDashDot';
import required from './required';

const locales: Rules = {
  required,
  alphaDash,
  alphaDashDot,
};

export default locales;
