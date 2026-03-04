enum FooKeys {
  FOO = "foo",
  BAR = "bar",
}

type A = Record<FooKeys, string>;

//enumの値を型として利用できるので、キーがユニオン型の"foo" | "bar"になる

// enumの値をキーにすると、キーの管理がenumに集約されて保守性高い
