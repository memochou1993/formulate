const isEmpty = (value: unknown): boolean => {
  return value === ''
    || value === null
    || value === undefined
    || (Array.isArray(value) && value.length < 1);
};

export default isEmpty;
