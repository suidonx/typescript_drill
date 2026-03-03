type User = {
  id: string;
  email: string;
  password: string;
};

type UserProfile = User & { name: string; job: string };

function insert(user: User) {
  console.log(user);
}

const userProfile = {
  id: "1",
  email: "fa@gmail.com",
  password: "000",
  name: "222",
  job: "engineer",
};
insert(userProfile);
