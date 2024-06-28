var data = {
    DbId: 123,
    email: "user@gmail.com",
    userId: 213,
    getCoupon: function (name, off) {
        return 10;
    },
};
data.googleId = "xyz";
data.startTrail = function () {
    return "hello";
};
console.log(data);
var NewObj = {
    height: 123,
    weight: 54,
    scolar: true,
    func: function (x) {
        console.log(x);
    },
};
var NewObj2 = {
    scolar: false,
    height: 123,
    weight: 43,
    func: function (n) {
        console.log(n);
    },
};
NewObj2.func("he");
NewObj.func("hello");
console.log(NewObj);
console.log(NewObj2);
