function fa(callback: (e: number) => number, e: number) {
  return callback(e);
}

const fun = (e: number) => 1 * e;
const v = fa(fun, 1);

/*
参考例として、Googleが公開しているTypeScriptのスタイルガイドの型エイリアスvsインターフェースの項目では、
プリミティブな値やユニオン型やタプルの型定義をする場合は
型エイリアスを利用し、オブジェクトの型を定義する場合はインターフェースを使うことを推奨しています。
*/
