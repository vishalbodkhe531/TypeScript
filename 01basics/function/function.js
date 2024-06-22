"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var squer = function (num) {
    return num * num;
};
var temp = squer(2);
//here we can access multiple argument
var signUp = function (name, email, isActive) { };
// Defualt value syntax
var signIn = function (name, email, isActive) {
    if (isActive === void 0) { isActive = false; }
};
signUp("Ram", "ram@gmail.com", false);
signIn("Krushna", "krushna@gmail.com");
///////////////////////////////////////////////*//////////////////////////////////////////////////
// CASE : 1
// const getValue = (val : number)=>{
//   if(val < 5) return true
//   return "All right !!"
// }
var getHello = function (val) {
    return "";
};
// syntax 1
var heros = ["thor", "ironman", "spliderman"];
// const heros = [1,2,3,4];
heros.map(function (hero) {
    return "hero is : ".concat(hero);
});
//syntax 2
var ages = [1, 2, 3, 4, 5];
ages.map(function (ages) {
    return "hero's age is : ".concat(ages);
});
// this is a correct syntax whenever the case we can not return a value
var consoleError = function (errMsg) {
    console.log(errMsg);
};
//here we can not use void or return , this function only for thow the error
var HandleError = function (errMsg) {
    throw new Error(errMsg);
};
