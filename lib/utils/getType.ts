const getType = (value: unknown): string => {
  return Object.prototype.toString.call(value).toLowerCase().slice(8, -1);
};

export default getType;
