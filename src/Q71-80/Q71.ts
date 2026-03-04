const obj = { a: "A", b: "B", c: 1 } as const;

type UnionLiteralType<T> = {
  [K in keyof T]: T[K];
}[keyof T];

type Obj = UnionLiteralType<typeof obj>;

// 別のやり方

const a = { a: "A", b: "B", c: 1 } as const;
type LiteralsUnion = (typeof a)[keyof typeof a];

// typeof aでobjの型を取り出してる
// Mapped Typeで作る必要ない
