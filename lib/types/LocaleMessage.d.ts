import RuleArguments from './RuleArguments';

interface LocaleMessage {
  (field: string, args: RuleArguments): string;
}

export default LocaleMessage;
