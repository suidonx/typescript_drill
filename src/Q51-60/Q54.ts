type User = {
  name: string;
  age: number;
};

type NullableObj<T> = {
  [K in keyof T]: T[K] | null;
};

type ResType = NullableObj<User>;
