import FieldValidator from './FieldValidator';
import defaultLocales from './locales';
import defaultRules from './rules';
import { FormValidatorArguments, Locales, Plugin, Rules } from './types';

class FormValidator {
  locale: string = 'en';

  locales: Locales = {};

  rules: Rules = {};

  constructor({
    customLocales = {},
    customRules = {},
    defaultLocale,
    fallbackLocale,
  }: FormValidatorArguments = {}) {
    this.registerLocales(customLocales);
    this.registerRules(customRules);
    this.initializeLocale(defaultLocale, fallbackLocale);
  }

  initializeLocale(defaultLocale?: string, fallbackLocale?: string) {
    const { language } = window.navigator;
    this.locale = defaultLocale || (language in this.locales ? language : (fallbackLocale || this.locale));
  }

  setLocale(locale: string) {
    this.locale = locale;
    return this;
  }

  defineField(name: string) {
    return new FieldValidator({
      name, 
      locale: this.locale,
      locales: this.locales,
      rules: this.rules,
    });
  }

  registerPlugin(plugin: Plugin) {
    if (!plugin || !plugin.locales || !plugin.rules) {
      throw new Error('The plugin must have "locales" and "rules" properties.');
    }
    return this
      .registerLocales(plugin.locales)
      .registerRules(plugin.rules);
  }

  registerLocales(locales: Locales) {
    this.locales = Object.keys(defaultLocales).reduce((acc, key) => ({ ...acc, [key]: { ...defaultLocales[key], ...(locales[key] || {}) } }), {});
    return this;
  }

  registerRules(rules: Rules) {
    this.rules = { ...defaultRules, ...rules };
    return this;
  }
}

export default FormValidator;
