import { Rules } from '~/types';
import alphaDash from './alphaDash';
import alphaDashDot from './alphaDashDot';
import max from './max';
import min from './min';
import required from './required';

const locales: Rules = {
  required,
  alphaDash,
  alphaDashDot,
  min,
  max,
};

export default locales;
