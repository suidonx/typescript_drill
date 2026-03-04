type SomeObject =
  | {
      a: string;
    }
  | {
      b: number;
    }
  | {
      c: boolean;
    };

declare const someObj: SomeObject;

if (someObj.c) {
  // error
}
