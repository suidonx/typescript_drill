interface NumberMap {
  [key: string]: number;
}

// ジェネリック関数でリテラルを保持
function createMap<T extends NumberMap>(v: T) {
  return v;
}

const map = createMap({
  one: 1,
  two: 2,
  three: 3,
});

// const lol = map.weoiroweiroew;  // error

type MyKeys = keyof typeof map; // "one" | "two" | "three"
