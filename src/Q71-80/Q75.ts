const objArray = [
  { foo: 1, bar: 2 },
  { foo: 3, bar: 4 },
  { foo: 5, bar: 6 },
] as const;

// foo の値だけを抽出する関数
function getFooValue(arr: typeof objArray) {
  return arr.map(({ foo }) => foo);
}
const result = getFooValue(objArray); // (1 | 3 | 5)[]

console.log(result);
// 1, 3, 5
