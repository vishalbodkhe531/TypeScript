interface User {
  readonly DbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail?: () => string;
  startTrail?(): string;
  getCoupon(couponname: string, value: number): number;
}

const data: User = {
  DbId: 123,
  email: "user@gmail.com",
  userId: 213,
  getCoupon: (name: "ram", off: 123) => {
    return 10;
  },
};

data.googleId = "xyz";
data.startTrail = () => {
  return "hello";
};
console.log(data);

////////////////////////////////////////////////////////////////////////////////////////////////

interface Obj {
  height: number;
  weight: number;
  gender?: string;
}

type funcType = (x: string) => void;

interface Obj2 extends Obj {
  scolar: boolean;
  func: funcType;
}

const NewObj: Obj2 = {
  height: 123,
  weight: 54,
  scolar: true,
  func: (x) => {
    console.log(x);
  },
};

const NewObj2: Obj2 = {
  scolar: false,
  height: 123,
  weight: 43,
  func: (n) => {
    console.log(n);
  },
};

NewObj2.func("he");
NewObj.func("hello");

console.log(NewObj);
console.log(NewObj2);
