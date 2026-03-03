type A = { name: string };
type B = { age: number };

type T1 = keyof (A & B);
// nameとageプロパティを持つ
// keyofでユニオン型として取り出す
