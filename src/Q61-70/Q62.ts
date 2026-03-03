function add<T extends number | string>(a: T, b: T): T {
  if (typeof a === "string" && typeof b === "string") {
    return (a + b) as T;
  } else if (typeof a === "number" && typeof b === "number") {
    return (a + b) as T;
  }
}

// bの型もチェックする
// だからといってどちらか特定の型に絞られたかは認識しないので
// コンパイラにTであることを伝える
