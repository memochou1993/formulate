import locales from './locales';
import rules from './rules';
import { MessageRule } from './types';
import { isEmpty } from './utils';

class FieldValidator {
  fieldName: string;
  locale: string;
  messageRules: MessageRule[] = [];
  shouldSkip: boolean = false;

  constructor(fieldName: string, locale: string) {
    this.fieldName = fieldName.toLowerCase();
    this.locale = locale;
  }

  get localeMessages() {
    return locales[this.locale];
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

  getRuleMessage(name: string, args?: object) {
    return (this.localeMessages[name] || this.localeMessages['default'])(this.fieldName, args);
  }

  buildMessageRule(name: string, args?: object) {
    const rule = rules[name](args);
    const ruleMessage = this.getRuleMessage(name, args);
    const isRequired = name === rules.required.name;
    return (value: unknown) => (!isRequired && isEmpty(value)) || rule(value) || ruleMessage;
  }

  pushMessageRule(name: string, args?: object) {
    const messageRule = this.buildMessageRule(name, args);
    this.messageRules.push(messageRule);
    return this;
  }

  when(condition: boolean) {
    if (!condition) {
      this.shouldSkip = true;
    }
    return this;
  }

  required() {
    return this.pushMessageRule(rules.required.name);
  }
}

export default FieldValidator;
