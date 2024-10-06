import { BetweenRuleArguments } from '~/rules/between';
import { MaxRuleArguments } from '~/rules/max';
import { MinRuleArguments } from '~/rules/min';
import { Messages } from '~/types';
import { formatNumber } from '~/utils';

const zhTW: Messages = {
  alphaDash: () => '此欄位只能包含字母、數字和底線',
  alphaDashDot: () => '此欄位只能包含字母、數字、底線和點',
  between: (_, { min, max }: BetweenRuleArguments) => ({
    array: `此欄位必須介於 ${formatNumber(min)} 到 ${formatNumber(max)} 個項目之間`,
    file: `此欄位必須介於 ${formatNumber(min)} 到 ${formatNumber(max)} KB 之間`,
    number: `此欄位必須介於 ${formatNumber(min)} 到 ${formatNumber(max)}`,
    string: `此欄位必須介於 ${formatNumber(min)} 到 ${formatNumber(max)} 個字元之間`,
  }),
  max: (_, { max }: MaxRuleArguments) => ({
    array: `此欄位不能大於 ${formatNumber(max)} 個項目`,
    file: `此欄位不能大於 ${formatNumber(max)} KB`,
    number: `此欄位不能大於 ${formatNumber(max)}`,
    string: `此欄位不能大於 ${formatNumber(max)} 個字元`,
  }),
  min: (_, { min }: MinRuleArguments) => ({
    array: `此欄位不能小於 ${formatNumber(min)} 個項目`,
    file: `此欄位不能小於 ${formatNumber(min)} KB`,
    number: `此欄位不能小於 ${formatNumber(min)}`,
    string: `此欄位不能小於 ${formatNumber(min)} 個字元`,
  }),
  required: () => '此欄位為必填',
};

export default zhTW;
