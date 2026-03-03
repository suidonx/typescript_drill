type User = { name: string; age: number; id: number };

type Numberable<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

type NumberUser = Numberable<User>;

type NumberType = Pick<User, NumberUser>;
