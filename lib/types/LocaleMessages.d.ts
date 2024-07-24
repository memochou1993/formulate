interface LocaleMessages {
  [key: string]: (field: string, args?: object) => string;
}

export default LocaleMessages;
