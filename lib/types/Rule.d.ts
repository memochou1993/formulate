interface Rule {
  (args?: unknown): (value: unknown) => boolean;
}

export default Rule;
