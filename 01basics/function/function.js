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
var result = function (x, y, z) {
    if (z === void 0) { z = 10; }
    if (!z)
        return x + y;
    return x + y + z;
};
console.log(result(12, 20, 12));
console.log(result(1, 2));
//---------------------------Rest Oparator--------------------------------------------------------//
var Data2 = function () {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
};
Data2(1, 2, 3, 4, 5, 6, 7);
var result2 = function () {
    var y = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        y[_i] = arguments[_i];
    }
    return y;
};
result2(1, 2, 3, 4);
console.log(result2(1, 2, 3, 4));
var getData = function (product) {
    console.log(product);
};
var productOne = {
    name: "Macbook",
    stock: 54,
    price: 100000,
    photo: "sample_photo_url",
};
getData(productOne);
var func = function (product) {
    console.log(product);
};
var passData = {
    _id: 1,
    name: "Macbook",
    stock: 54,
    price: 100000,
    photo: "sample_photo_url",
};
console.log(passData);
//------------------------------------------Never Type-------------------------------------------//
var err = function () {
    throw new Error();
};
