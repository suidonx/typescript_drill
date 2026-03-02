function eachItem(val: number, i: number) {
  return val.toExponential(3);
}
const arr = [4, "fafa", 6];
const newArr = arr.filter((v) => typeof v === "number").map(eachItem); // eachItem でエラー
console.log(newArr);

// filterの戻り値の型は元のT[]を示す
// v is numberでnumberが来ると開発者が保証することもできる

// eachItemでtype ofを使うのがよい
