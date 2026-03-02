let x = () => ({ name: "Alice" });
let y = () => ({ name: "Alice", location: "Seattle" });

// 1
x = y;
// 2
y = x;

// yの戻り値がxの戻り値のサブタイプであれば、xに代入可能
