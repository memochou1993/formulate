import { Condition, FieldValidatorArguments, Locales, MessageRule, MessageRuleArguments, RuleArguments, Rules } from './types';
import { isEmpty } from './utils';

class FieldValidator {
  name: string;

  locale: string;

  locales: Locales;

  rules: Rules;

  messageRules: MessageRule[] = [];

  condition: Condition = {};

  shouldSkip: boolean = false;

  constructor({
    name,
    locale,
    locales,
    rules,
  }: FieldValidatorArguments) {
    this.name = name;
    this.locale = locale;
    this.locales = locales;
    this.rules = rules;
  }

  get messages() {
    if (!(this.locale in this.locales)) {
      throw new Error(`The messages for the locale "${this.locale}" are missing.`);
    }
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

  collect() {
    return this.shouldSkip ? [] : this.messageRules;
  }

  apply(ruleName: string, args?: RuleArguments) {
    return this.pushMessageRule(ruleName, {
      ...args,
      fieldName: this.name.toLowerCase(),
      locale: this.locale,
    });
  }

  getRule(name: string) {
    if (!(name in this.rules)) {
      throw new Error(`The rule "${name}" does not exist.`);
    }
    return this.rules[name];
  }

  getMessage(ruleName: string) {
    if (!(ruleName in this.messages)) {
      throw new Error(`The message for the rule "${ruleName}" is missing.`);
    }
    return this.messages[ruleName];
  }

  buildMessageRule(ruleName: string, args: MessageRuleArguments) {
    const rule = this.getRule(ruleName)(args);
    const message = this.getMessage(ruleName)(args);
    return (value: unknown) => (ruleName !== 'required' && isEmpty(value)) || rule(value) || message;
  }

  pushMessageRule(ruleName: string, args: MessageRuleArguments) {
    if (ruleName in this.condition && !this.condition[ruleName]) return this;
    const messageRule = this.buildMessageRule(ruleName, args);
    this.messageRules.push(messageRule);
    return this;
  }

  required() {
    return this.apply(this.required.name);
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

  alphaDash() {
    return this.apply(this.alphaDash.name);
  }

  alphaDashDot() {
    return this.apply(this.alphaDashDot.name);
  }

  max(value: number) {
    return this.apply(this.max.name, {
      value,
    });
  }

  min(value: number) {
    return this.apply(this.min.name, {
      value,
    });
  }
}

export default FieldValidator;
