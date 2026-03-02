type Foo = {
  name?: string;
  age?: number;
};

type OmitFoo = Omit<Foo, "age">;
