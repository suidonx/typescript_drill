// keyof Record<K, T>

// Record<K, T>[K]

// 1つ目は、Record<K, T>のキーをユニオン型にしたもの
// 2つ目は、Record<K, T>の値をユニオン型

type R = Record<"a" | "b", number>;

// keyof では"a" | "b"

// インデックスアクセス型
// "a" | "b"に対応した値、number
