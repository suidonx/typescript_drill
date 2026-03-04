const a = { a: "A", b: "B", c: 1 } as const;

type ValueNumberPropety<T> = {
  [K in keyof T]: T[K] extends number ? T[K] : never;
}[keyof T];

type AnswerType = ValueNumberPropety<typeof a>;

const c: AnswerType = 1;
