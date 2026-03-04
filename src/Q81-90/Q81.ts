interface Hoge {
  a: string;
  (arg: string): void;
}

const hoge = (arg: string) => {
  console.log(arg);
};

const a = { a: "foo" };

const f: Hoge = Object.assign(hoge, a);

// Hogeは関数でもありオブジェクトでもある
// a: stringと、stringを受け取り、戻り値がvoidの関数のシグネチャを持つ

// fの中には、Hogeにある両方のプロパティを持ったオブジェクトを作りたい

// 関数hogeの中にaというプロパティをつければOK
