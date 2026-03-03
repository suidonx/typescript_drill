type MyUnionType =
  | { foo: "a"; bar: 1 }
  | { foo: "b"; bar: 2 }
  | { foo: "c"; bar: 3 };

type Foo<T> = {
  [K in keyof T]: T[K] extends string ? T[K] : never;
}[keyof T];

type Foos = Foo<MyUnionType>;

// MyUnionType["foo"]でfooプロパティの値の型を全て取り出す。
