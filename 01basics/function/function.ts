const squer = (num: number) => {
  return num * num;
};

const temp: number = squer(2);

//here we can access multiple argument
const signUp = (name: string, email: string, isActive: boolean) => {};

// Defualt value syntax
const signIn = (name: string, email: string, isActive = false) => {};

signUp("Ram", "ram@gmail.com", false);
signIn("Krushna", "krushna@gmail.com");

///////////////////////////////////////////////*//////////////////////////////////////////////////

// CASE : 1
// const getValue = (val : number)=>{
//   if(val < 5) return true

//   return "All right !!"
// }

const getHello = (val: string): string => {
  return "";
};

// syntax 1
const heros = ["thor", "ironman", "spliderman"];
// const heros = [1,2,3,4];

heros.map((hero) => {
  return `hero is : ${hero}`;
});

//syntax 2
const ages = [1, 2, 3, 4, 5];

ages.map((ages: number) => {
  return `hero's age is : ${ages}`;
});

// this is a correct syntax whenever the case we can not return a value
const consoleError = (errMsg: string): void => {
  console.log(errMsg);
};

//here we can not use void or return , this function only for thow the error

const HandleError = (errMsg: string): never => {
  throw new Error(errMsg);
};

//-----------------------------------------------------------------------------------------------//

type Data = (firstNo: number, secoundNo: number, thirdNo?: number) => number;

const result: Data = (x, y, z = 10) => {
  if (!z) return x + y;
  return x + y + z;
};

console.log(result(12, 20, 12));
console.log(result(1, 2));

//---------------------------Rest Oparator--------------------------------------------------------//

const Data2 = (...x: number[]) => {
  console.log(x);
};

Data2(1, 2, 3, 4, 5, 6, 7);

//best syntax
type Data3 = (...x: number[]) => number[];

const result2: Data3 = (...y) => {
  return y;
};

result2(1, 2, 3, 4);

console.log(result2(1, 2, 3, 4));

//----------------------------------Function with objects----------------------------------------//

type getDataType = (product: {
  name: string;
  stock: number;
  price: number;
  photo: string;
}) => void;
const getData: getDataType = (product): void => {
  console.log(product);
};

const productOne = {
  name: "Macbook",
  stock: 54,
  price: 100000,
  photo: "sample_photo_url",
};

getData(productOne);

// best syntax

interface products {
  readonly _id: number;
  name: string;
  stock: number;
  price: number;
  photo: string;
}

type getProducts = (product: products) => void;

const func: getProducts = (product) => {
  console.log(product);
};

const passData: products = {
  _id: 1,
  name: "Macbook",
  stock: 54,
  price: 100000,
  photo: "sample_photo_url",
};

console.log(passData);

//------------------------------------------Never Type-------------------------------------------//

const err = (): never => {
  throw new Error();
};
