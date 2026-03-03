type F<T> = T extends (a: infer P) => any ? P : T;
type User = { name: string; age: number };
const f = (a: User) => a;

const a: F<User> = f({ name: "kenji", age: 9 }); // User
const b: F<string> = "hello"; //string

// T extends (a: infer P) => any
// extendsは右側まで全部かかる
// つまりTが任意の引数を受け取り、任意の型を返す関数型という意味
