type Type = {
  a: string;
  b: number;
  c: (ind: string) => void;
};

type Key<K extends keyof Type> = Type[K];
const a: Key<"a"> = "a";

// keyof Typeでキーを取得
// ジェネリクス<K extends keyof Type>で型パラメータKはTypeの持つキーのみに制限
// Type[K]でキーと対応した値の型を取得
