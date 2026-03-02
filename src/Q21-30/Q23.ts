type MyObj = {
  name?: string;
};

function foo(obj: MyObj): string {
  return obj.name!.slice(0, 5);
}

// !とは
// 非nullアサーション演算子で、nullやundefinedではないことを開発者がコンパイラに保証するもの
// どうしようもない時に使う
