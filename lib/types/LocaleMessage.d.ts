import MessageRuleArguments from './MessageRuleArguments';

interface LocaleMessage {
  (args: MessageRuleArguments): string;
}

export default LocaleMessage;
