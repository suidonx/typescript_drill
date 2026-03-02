type F = {
  foo: string;
  bar: number;
};
const E: F = { foo: "fafa", bar: "fafa" }; //Error

// Fを再利用して、bar: "fafa"を代入できるようにする

// Record<keyof F, string>でfoo, barプロパティの値がstring型になる
