const formatNumber = (number: number, decimalPlaces: number = 0) => {
  return new Intl.NumberFormat(undefined, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(number);
};

export default formatNumber;
