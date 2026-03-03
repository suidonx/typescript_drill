interface Foo {
  foo: number;
  common: string;
}

interface Bar {
  bar: number;
  common: string;
}

function fooAndBar(arg: Bar | Foo) {
  if ("foo" in arg) {
    return arg.foo;
  }
  return arg.bar;
}

const result = fooAndBar({ foo: 9, common: "common" });
