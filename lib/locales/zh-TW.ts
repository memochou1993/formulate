import { Locale } from '~/types';
import { formatNumber } from '~/utils';

const zhTW: Locale = {
  alphaDash: () => '此欄位只能包含字母、數字和底線',
  alphaDashDot: () => '此欄位只能包含字母、數字、底線和點',
  max: ({ value }) => `此欄位不能大於 ${formatNumber(value as number)}`,
  min: ({ value }) => `此欄位不能小於 ${formatNumber(value as number)}`,
  required: () => '此欄位為必填',
};

export default zhTW;
