type YukariNoChi = "tokyo";
type OnlySpecificProperty<T> = Pick<
  T,
  { [K in keyof T]: T[K] extends YukariNoChi ? K : never }[keyof T]
>;

// Pick
// 型Tからオブジェクト型を作り、型Tの持つキーの値の型を抽出

// キーはTの持つキーK

// KキーKに対応したT[K]が、YukariNoChi("tokyo") と部分型（つまり代入できるか）であれば
// Kが値になる。
// そうでなければ、never

// オブジェクトの値が"tokyo"であるキーをPickする型
