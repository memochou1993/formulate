import { Rules } from '~/types';
import alphaDash from './alphaDash';
import alphaDashDot from './alphaDashDot';
import between from './between';
import email from './email';
import max from './max';
import min from './min';
import required from './required';

const locales: Rules = {
  alphaDash,
  alphaDashDot,
  between,
  email,
  max,
  min,
  required,
};

export default locales;
