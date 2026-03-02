// widening
// 型推論によってリテラル型がプリミティブ型に拡張されること

const a = "a"; // a型（リテラル）
let b = "a"; //string型
let c = "a" as const; // const アサーションでリテラル型にすることも可能
