const obj = {
  foo: "foo",
  bar: "bar",
} as const;

const keysArray = Object.keys(obj);

const keys = Object.keys as <T>(o: T) => Extract<keyof T, string>[];

const keysArray2 = keys(obj); // ("foo" | "bar")[]
