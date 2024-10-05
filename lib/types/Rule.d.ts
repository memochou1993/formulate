import RuleArguments from './RuleArguments';

interface Rule {
  (args?: RuleArguments): (value: unknown) => boolean;
}

export default Rule;
