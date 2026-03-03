const isNarrowScreen = () => false;
export function wideNarrow<T>(wide: T, narrow: T) {
  return isNarrowScreen() ? narrow : wide;
}

const a = wideNarrow(0, 8);
const extendedAreaHeight = 26;
const b = a + extendedAreaHeight; // Operator '+' cannot be applied to types 'string | number' and 'number'.

// ジェネリクスで型を統一して推論すると、安全に加算できる
