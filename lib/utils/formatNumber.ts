const formatNumber = (value: number, decimalPlaces: number = 0) => {
  return new Intl.NumberFormat(undefined, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(value);
};

export default formatNumber;
