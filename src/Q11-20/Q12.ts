type Nullable<T> = { [K in keyof T]: T[K] | null };

interface User {
  name: string;
  age: number;
}

const obj: Nullable<User> = { name: "taro", age: 2 };
const obj2: Nullable<User> = { name: null, age: null };
