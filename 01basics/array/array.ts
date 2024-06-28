//different syntax to define array

// const Ary2: string[] = ["str", "nope"]

// const Ary3: Array<string> = ["newAry", "StringAry", "Ary", "384023484"]

// const Ary: Array<string | number> = ["Ary", 20, "str", 77, 86]

// const fixAry: [number, number, string] = [10, 20, "30"]

const Arr1: string[] = ["sun", "moon"];

const Arr2: Array<string> = ["manggo", "apple", "banana"];

const Arr3: Array<string | number> = [12, "ram", "ravi", 32];

const Arr4: (string | number)[] = ["12", 32, 32, "33"];

//tupple
const Arr5: [number, number, string] = [12, 45, "pavan"];

//custom data types

type User = string | number | boolean;

let userData: User;
userData = false;
userData = "Ram";
userData = 123;

/////////////////////////////////////////////
// we can not change value
let pi: 3.14 = 3.14;
// pi = 3.145

/////////////////////////////////////////

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "xyz"; ===> thes of value's not allow

////////////////////////////////////////////

type User2 = [number, string];

let newUser: User2 = [123, "Ram@gmail.com"];

newUser[1] = "rohit@gmail.com";

console.log(newUser);
