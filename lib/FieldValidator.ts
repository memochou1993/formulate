import { Conditions, FieldValidatorArguments, Locales, MessageRule, RuleArguments, Rules } from './types';
import { isEmpty } from './utils';

class FieldValidator {
  private name: string;

  private locale: string;

  private locales: Locales;

  private rules: Rules;

  private messageRules: MessageRule[] = [];

  private condition: Conditions = {};

  private shouldSkip: boolean = false;

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

  private buildMessageRule(ruleName: string, args: RuleArguments) {
    const rule = this.getRule(ruleName)(args);
    const message = this.getMessage(ruleName)(this.name.toLowerCase(), args);
    return (value: unknown) => (ruleName !== 'required' && isEmpty(value)) || rule(value) || message;
  }

  private pushMessageRule(ruleName: string, args: RuleArguments) {
    if (ruleName in this.condition && !this.condition[ruleName]) return this;
    const messageRule = this.buildMessageRule(ruleName, args);
    this.messageRules.push(messageRule);
    return this;
  }

  public get messages() {
    if (!(this.locale in this.locales)) {
      throw new Error(`The messages for the locale "${this.locale}" are missing.`);
    }
    return this.locales[this.locale];
  }

  public getRule(name: string) {
    if (!(name in this.rules)) {
      throw new Error(`The rule "${name}" does not exist.`);
    }
    return this.rules[name];
  }

  public getMessage(ruleName: string) {
    if (!(ruleName in this.messages)) {
      throw new Error(`The message for the rule "${ruleName}" is missing.`);
    }
    return this.messages[ruleName];
  }

  public when(condition: boolean | Conditions) {
    if (typeof condition === 'object') {
      this.condition = condition;
      return this;
    }
    if (!condition) {
      this.shouldSkip = true;
    }
    return this;
  }

  public validate(value: unknown): boolean | string {
    if (this.shouldSkip) return true;
    for (const messageRule of this.messageRules) {
      const result = messageRule(value);
      if (typeof result === 'string') {
        return result;
      }
    }
    return true;
  }

  public collect() {
    return this.shouldSkip ? [] : this.messageRules;
  }

  public apply(ruleName: string, args?: RuleArguments) {
    return this.pushMessageRule(ruleName, args || {});
  }

  public required() {
    return this.apply(this.required.name);
  }

  public alphaDash() {
    return this.apply(this.alphaDash.name);
  }

  public alphaDashDot() {
    return this.apply(this.alphaDashDot.name);
  }

  public max(value: number) {
    return this.apply(this.max.name, { value });
  }

  public min(value: number) {
    return this.apply(this.min.name, { value });
  }
}

export default FieldValidator;
