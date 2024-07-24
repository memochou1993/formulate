interface Rule {
  (args?: object): (value: unknown) => boolean;
}

export default Rule;
