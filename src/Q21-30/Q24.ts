// typepf instanceofのほかにユーザー独自の型ガード関数を定義できる

function isStringArray(obj: unknown): obj is Array<string> {
  return Array.isArray(obj) && obj.every((value) => typeof value === "string");
}

// >このように返り値を obj is Array<string> のように宣言している関数
// は真偽値が返らなくてはならず、isStringArray 関数の返値が true なら、obj は Array<string>型 が返ることを指定しています。
