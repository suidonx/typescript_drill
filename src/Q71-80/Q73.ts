type TransitionStyles = {
  entering: Object;
  entered: Object;
  exiting: Object;
  exited: Object;
  [key: string]: Object;
};

const b: TransitionStyles = {
  entered: {},
  exiting: {},
  exited: {},
  entering: {},
  eee: "fa", // 本来ならエラーにしたいが追加できる
};

// [key in T]: object にして、Tに特定の文字列が入ったユニオン型を渡すと、特定のキーしか含まないオブジェクト型にできる
