interface Part {
  name: string;
  age: number;
  add(): number;
}

// Mapped Typesでオブジェクト型をカスタマイズする
// keyof Partは "name" | "age" | "add"と同じ意味
// inで取り出す
// valueの方で条件分岐してneverか型を返すかして、filterをかける
// [keyof Part]はインデックスタイプでプロパティにアクセスして、値の型を取得

type Mapped = {
  [K in keyof Part]: Part[K] extends Function ? K : never;
}[keyof Part];
