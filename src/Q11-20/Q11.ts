/*
type ResolvedType<T> = T extends Promise<infer R>
  ? R
  : T extends Observable<infer R>
  ? R
  : T;
*/

// T extends Promise<infer R> ? R
// infer RでPromiseの中の型をRと推論する
// Promise<number>ならnumberがRという感じ

//  TがPromiseの部分型なら、Promise内部のRを返す
// そうでない時、Observable型でも同じことをする
// どちらでもない時、そのままTを返す
