import MessageRuleArguments from './MessageRuleArguments';

interface LocaleMessage {
  // FIXME:
  // (fieldName: string, args: MessageRuleArguments): string;
  (args: MessageRuleArguments): string;
}

export default LocaleMessage;
