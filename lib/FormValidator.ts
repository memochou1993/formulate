import FieldValidator from './FieldValidator';
import locales from './locales/index';
import { Locales, Plugin, Rules } from './types';

class FormValidator {
  locale: string;

  customLocales: Locales = {};

  customRules: Rules = {};

  constructor() {
    const { language } = window.navigator;
    this.locale = language in locales ? language : 'en';
  }

  setLocale(locale: string) {
    this.locale = locale;
    return this;
  }

  defineField(name: string) {
    return new FieldValidator(name, this.locale, this.customRules, this.customLocales);
  }

  registerPlugin(plugin: Plugin) {
    return this
      .registerLocales(plugin.locales)
      .registerRules(plugin.rules);
  }

  registerLocales(locales: Locales) {
    this.customLocales = { ...this.customLocales, ...locales };
    return this;
  }

  registerRules(rules: Rules) {
    this.customRules = { ...this.customRules, ...rules };
    return this;
  }
}

export default FormValidator;
