import { Rule } from '~/types';
import required from './required';

const locales: {
  [key: string]: Rule;
} = {
  required,
};

export default locales;
