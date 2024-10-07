const formatText = (value: string) =>{
  return value
    .replace(/([^\x20-\x7E])([\x20-\x7E])/gu, '$1 $2')
    .replace(/([\x20-\x7E])([^\x20-\x7E])/gu, '$1 $2')
    .replace(/ +/g, ' ');
};

export default formatText;
