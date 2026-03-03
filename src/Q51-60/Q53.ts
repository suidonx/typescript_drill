interface SomeObject {
  firstKey: string;
  secondKey: string;
  thirdKey: { id: { name: string } };
}

type OptionalSomeObjectType = Partial<SomeObject>;
const c: OptionalSomeObjectType = {};

type RecursivePartial<T> = {
  [K in keyof T]?: RecursivePartial<T[K]>;
};

type newSomeObjectType = RecursivePartial<SomeObject>;

const b: newSomeObjectType = {};
