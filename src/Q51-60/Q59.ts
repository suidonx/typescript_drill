type User = { name: string; age: number };
type Value<T> = T[keyof T];
type ValueType = Value<User>;

// ユニオン型で返したい時はkeyofを使う
// キーを使って値を取り出す
