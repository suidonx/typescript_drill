type A = string | never; // string
type B = number | never; // number

// neverは値を全く持たないので、neverが含まれていても消えるように扱われる
