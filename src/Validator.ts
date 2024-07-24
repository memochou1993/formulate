import FieldValidator from './FieldValidator';
import locales from './locales/index';

class Validator {
  locale: string;

  constructor() {
    const { language } = window.navigator;
    this.locale = language in locales ? language : 'en';
  }

  setLocale(locale: string) {
    if (!(locale in locales)) {
      throw new Error(`Locale ${locale} is not supported`);
    }
    this.locale = locale;
    return this;
  }

  defineField(name: string) {
    return new FieldValidator(name, this.locale);
  }
}

export default Validator;
