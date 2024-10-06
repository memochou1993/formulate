import RuleArguments from './RuleArguments';

interface Message {
  (field: string, args: RuleArguments<unknown>): string | Record<string, string>;
}

export default Message;
