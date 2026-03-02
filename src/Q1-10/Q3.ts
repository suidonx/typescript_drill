type Foo = {
  name?: string;
  age?: number;
};

type PickFoo = Pick<Foo, "name">;

// 型Fooからキー"name"を抽出して、新しいオブジェクト型を作る
