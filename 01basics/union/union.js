// Union type
// here surName allow two type of value number or string
var surName;
surName = "123";
// console.log(`string value : ${surName}`);
surName = 123;
var Ram = {
    name: "Ram",
    id: 213,
};
Ram = { username: "Rama", id: 123 };
console.log(Ram);
////////////////////////////////////////////////////////////////////////
function getDbId(id) {
    console.log("Database ID : ".concat(id));
    console.log("And type is : ".concat(typeof id));
}
getDbId(4);
