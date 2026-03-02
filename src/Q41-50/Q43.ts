let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

// 1
y = x;

// 2
x = y;

// 構造が似ている場合、代入できる
// yにxを代入するのは第二引数が省略されているので代入OK

// 逆は引数が多すぎるためNG
