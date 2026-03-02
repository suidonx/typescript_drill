type StrFunc = (arg: string) => string;
type NumFunc = (arg: number) => string;

declare const obj: StrFunc | NumFunc;
obj("fa"); // Argument of type 'string' is not assignable to parameter of type 'never'.

// objはユニオン型の関数
// numberとstringのどちらかを受け取る関数
// 二つの関数型の共通部分ならば引数を受け取れるが、それぞれの引数で共通の型は存在しない
// なのでneverしか受け取れない
