let a = 1;
const num = a && "hoge";

// 1 && "hoge"

// まずaはnumber型なのでnumber型の全ての値を取りうる
// 条件分岐がある

// aがtruthyの時は、"hoge"
// aがfalsyの時は、aが0の時だけなので、0

// つまり、0 | "hoge"となる。
