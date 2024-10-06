import { MaxRuleArguments } from '~/rules/max';
import { MinRuleArguments } from '~/rules/min';
import { Messages } from '~/types';
import { formatNumber } from '~/utils';

const zhTW: Messages = {
  alphaDash: () => '此欄位只能包含字母、數字和底線',
  alphaDashDot: () => '此欄位只能包含字母、數字、底線和點',
  max: (_, { value }: MaxRuleArguments) => ({
    number: `此欄位不能大於 ${formatNumber(value)}`,
    string: `此欄位不能大於 ${formatNumber(value)} 個字元`,
    array: `此欄位不能大於 ${formatNumber(value)} 個項目`,
  }),
  min: (_, { value }: MinRuleArguments) => ({
    number: `此欄位不能小於 ${formatNumber(value as number)}`,
    string: `此欄位不能小於 ${formatNumber(value as number)} 個字元`,
    array: `此欄位不能小於 ${formatNumber(value as number)} 個項目`,
  }),
  required: () => '此欄位為必填',
};

export default zhTW;
