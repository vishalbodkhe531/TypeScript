//here access arguments
var createUser = function (_a) {
    var string = _a.name, boolean = _a.isActive;
};
createUser({ name: "Ram", isActive: false });
//here return name and price or object
var createCourse = function () {
    return { name: "Krishna", price: 123 };
};
var generateUser = function (user) {
    return { name: "", email: "", isActive: true };
};
generateUser({ name: "", email: "", isActive: true });
var myClient = {
    _id: "123",
    name: "ram",
    email: "ram@gmail.com",
    isActive: false,
};
myClient.email = "rama@gmail.com";
