interface Example {
  diff(one: string): number;
  diff(one: string, two: string): number;
  diff(one: string, two: string, three: boolean): number;
}

interface Example {
  diff(one: string, two?: string, three?: boolean): number;
}

// オーバーロード関数はオプション引数にして実現
