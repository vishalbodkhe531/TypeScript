//here access arguments
const createUser = ({ name: string, isActive: boolean }) => {};

createUser({ name: "Ram", isActive: false });

//here return name and price or object
const createCourse = (): { name: string; price: number } => {
  return { name: "Krishna", price: 123 };
};

//////////////////////////////////////****//////////////////////////////////////////////////////

// Type Aliases in typescript

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

const generateUser = (user: User): User => {
  return { name: "", email: "", isActive: true };
};

generateUser({ name: "", email: "", isActive: true });

//////////////////////////////////***//////////////////////////////////////////////////////////////

// ReadOnly
// here we have use readonly whenever we have use readonly, we can not be change the actual value
type Client = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creaditCardDetails?: number; // defult value
};

let myClient: Client = {
  _id: "123",
  name: "ram",
  email: "ram@gmail.com",
  isActive: false,
};

myClient.email = "rama@gmail.com";

// we can't update the value
// myClient._id = "121";

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  card_date: string;
};

// it's not a good practice
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
