const o = { name: "hoge" };
const defaultO = { name: "hoge" };

function a(o = defaultO) {
  return o;
}

a(o);
a();

// defalut引数を設定すると、型推論が働きany型にならない
