const user = { name: "kenji", age: 98 };

// {
//     name: string;
//     age:numbe;
// }

// 各プロパティの値を見て、型推論するから
// なぜリテラル型にならないのかというと、制約が緩い方向に広がるから。

// リテラル型にする場合はas constをつける
// そしてreadonlyプロパティになる

const userAsConst = { name: "kenji", age: 98 } as const;

// 変数宣言のときに、末尾にas constをつけるとその値をreadonlyにした上で、リテラル型にしてくれます。
