type GetterName<T extends string> = Capitalize<T>;

type GotNameWithCapitalize = GetterName<"foo">; // 'Foo'
