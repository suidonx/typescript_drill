let createObj = <T>(obj: T) => {
  let o = {} as { [K in keyof T]: string };
  for (const key in obj) {
    o[key] = String(obj[key]);
  }
  return o;
};

const anotherFun = createObj;

// let createObj = <T>(obj: T) => {
// ジェネリクスを使った関数定義
// 通常は関数名の横にジェネリクスを書くが、アロー関数なので()の左側になる
// 引数よりも先に型を読みたいから
