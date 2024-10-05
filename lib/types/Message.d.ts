import RuleArguments from './RuleArguments';

interface Message {
  (field: string, args: RuleArguments): string;
}

export default Message;
