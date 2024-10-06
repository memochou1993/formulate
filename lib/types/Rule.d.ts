import RuleArguments from './RuleArguments';

interface Rule {
  (args?: RuleArguments): (input: unknown) => boolean;
}

export default Rule;
