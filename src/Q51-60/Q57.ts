enum StatusEnum {
  RootAdmin = "RootAdmin",
  Admin = "Admin",
  User = "User",
}
type T2 = Partial<Record<StatusEnum, number | null>>;
const t2: T2 = { RootAdmin: 0, User: null };

/*
{
  RootAdmin?: number | null;
  Admin?: number | null;
  User?: number | null;
}
*/

// T2はこのような型になるので、User: nullが許容される
