import { Rules } from '~/types';
import alphaDash from './alphaDash';
import alphaDashDot from './alphaDashDot';
import between from './between';
import email from './email';
import endsWith from './endsWith';
import max from './max';
import min from './min';
import required from './required';
import startsWith from './startsWith';

const locales: Rules = {
  alphaDash,
  alphaDashDot,
  between,
  email,
  endsWith,
  max,
  min,
  required,
  startsWith,
};

export default locales;
