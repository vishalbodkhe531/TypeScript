// Union type
// here surName allow two type of value number or string
let surName: number | string;

surName = "123";
// console.log(`string value : ${surName}`);

surName = 123;

// console.log(`number value : ${surName}`);

////////////////////////////////////////////////////////////////////////////////////////////////

type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let Ram: User | Admin = {
  name: "Ram",
  id: 213,
};

Ram = { username: "Rama", id: 123 };

console.log(Ram);

////////////////////////////////////////////////////////////////////////

function getDbId(id: number | string) {
  console.log(`Database ID : ${id}`);
  console.log(`And type is : ${typeof id}`);
}

getDbId(4);
