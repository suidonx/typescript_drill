type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// 関数の戻り値の型を返す

// infer R
// Conditional Typesの中で使われる型演算子infer

// T extends (...args: any[]) => infer R
// ここまでが条件式で、Tが関数型なのかを聞いている
// infer Rで戻り値の型をとりあえずRとしている
