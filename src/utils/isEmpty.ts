const isEmpty = (v: unknown) => {
  return v === ''
    || v === null
    || v === undefined
    || (Array.isArray(v) && v.length < 1);
};

export default isEmpty;
