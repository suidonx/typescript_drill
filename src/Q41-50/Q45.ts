let f1 = function () {
  return { name: "kenji" };
};

let f2 = function () {
  return { name: "kenji", age: 49 };
};

// 1
f1 = f2;

// 2
f2 = f1;

// 戻り値の型について、f2がf1のサブタイプなので、f1 = f2は代入OK
