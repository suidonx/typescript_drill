type Diff<T, U> = T extends U ? never : T;

// TがUに含まれるならnever、含まれないならTを返す
// TからUを除外する条件型
