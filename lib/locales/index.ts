import { LocaleMessages } from '~/types';
import en from './en';
import zhTW from './zh-TW';

const locales: {
  [key: string]: LocaleMessages;
} = {
  en,
  zhTW,
};

export default locales;
