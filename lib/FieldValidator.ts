import defaultLocales from './locales';
import defaultRules from './rules';
import { Condition, Locales, MessageRule, MessageRuleArguments, Rules } from './types';
import { isEmpty } from './utils';

class FieldValidator {
  fieldName: string;

  locale: string;

  locales: Locales;

  rules: Rules;

  messageRules: MessageRule[] = [];

  condition: Condition = {};

  shouldSkip: boolean = false;

  constructor(fieldName: string, locale: string, customRules: Rules = {}, customLocales: Locales = {}) {
    this.fieldName = fieldName.toLowerCase();
    this.locale = locale;
    this.locales = Object.keys(defaultLocales).reduce((acc, key) => ({ ...acc, [key]: { ...defaultLocales[key], ...(customLocales[key] || {}) } }), {});
    this.rules = { ...defaultRules, ...customRules };
  }

  get localeMessages() {
    return this.locales[this.locale];
  }

  validate(value: unknown): boolean | string {
    if (this.shouldSkip) return true;
    for (const messageRule of this.messageRules) {
      const result = messageRule(value);
      if (typeof result === 'string') {
        return result;
      }
    }
    return true;
  }

  getMessageRules() {
    return this.shouldSkip ? [] : this.messageRules;
  }

  getRule(name: string) {
    if (!(name in this.rules)) {
      throw new Error(`The rule "${name}" does not exist.`);
    }
    return this.rules[name];
  }

  getLocaleMessage(name: string) {
    if (!(name in this.localeMessages)) {
      throw new Error(`The locale message for the rule "${name}" is missing.`);
    }
    return this.localeMessages[name];
  }

  buildMessageRule(name: string, args: MessageRuleArguments) {
    const rule = this.getRule(name)(args);
    const localeMessage = this.getLocaleMessage(name)(args);
    return (value: unknown) => (name !== 'required' && isEmpty(value)) || rule(value) || localeMessage;
  }

  pushMessageRule(name: string, args: MessageRuleArguments) {
    if (name in this.condition && !this.condition[name]) return this;
    const messageRule = this.buildMessageRule(name, args);
    this.messageRules.push(messageRule);
    return this;
  }

  when(condition: boolean | { [key: string]: boolean }) {
    if (typeof condition === 'object') {
      this.condition = condition;
      return this;
    }
    if (!condition) {
      this.shouldSkip = true;
    }
    return this;
  }

  use(name: string, args?: MessageRuleArguments) {
    return this.pushMessageRule(name, {
      ...args,
      fieldName: this.fieldName,
      locale: this.locale,
    });
  }

  required() {
    return this.use('required');
  }

  alphaDash() {
    return this.use('alphaDash');
  }

  alphaDashDot() {
    return this.use('alphaDashDot');
  }
}

export default FieldValidator;
