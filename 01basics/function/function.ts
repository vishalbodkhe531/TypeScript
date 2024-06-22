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

export {};
