const t3 = { name: "kenji", age: 99 } as const;
type T3 = keyof typeof t3;

// as constでt3はリテラル型かつreadonly
// typeof t3でオブジェクト型を取得
// keyofでオブジェクト型のキーをユニオンで取得
