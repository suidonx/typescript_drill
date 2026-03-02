type Animal = { name: string; run: boolean };
type Bird = { name: string; fly: boolean };
const animal = { name: "tigger", run: true };
const bird = { name: "condol", fly: true };

type NotHuman = Animal | Bird;

const a = (b: NotHuman) => {
  b.run;
};

// bはNotHuman型で、NotHuman型はAnimalとBirdのユニオン型
// runが定義されているのはAnimal型だけだから型を確定させる必要がある
