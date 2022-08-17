import "./App.css";
import Counter from "./components/Counter";
import Users from "./components/Users";

// variable lakhar niom typeScript a
let student: string = "jolly";
let age: number = 55;
let isSmart: boolean = true;
let students: string[] = ["joe", "Biden", "Haring"];
let fees: number[] = [12, 45, 78, 12, 45];

// object lekhar niom typeScript a system 1

/* const person: {
  name: string;
  job: string;
  employed: boolean;
  age: number;
  // location:any; any hosay j kono type say neta paray
  location: number;
} = {
  name: "Bill Clinton",
  job: "jobless",
  employed: true,
  age: 85,
  // location: { lat: 22, long: 25 }, akhane j kono type ar data thkete paray
  location: 55,
}; */

// object lekhar second niom typeScript a system 2

// interface ta bavohar koray object ar
// type alada kore lekha object a bavohar korar jonno.
interface Person {
  name: string;
  job?: string;
  // akhane ? ai cenho tar madomay optional ta set koray hoy object
  // ar moday ar value thak te paray aber na o thak te paray.jode objece
  // ar moday man deta hoy taholay j type lekha hoisay si type man deta hobe

  age: number;
  empolyed: string | number | boolean;
  //akhne | ai cenhor madomay option toire kora
  // jay object ar poperty ta j kono typer hote paray.
  location?: string | number;
  // location:any; any hosay j kono type say neta paray
}

const person: Person = {
  name: "Bill Clinton",
  job: "jobless",
  empolyed: true,
  age: 85,
  // location: { lat: 22, long: 25 }, akhane j kono type ar data thkete paray
  location: 55,
};

// jode function thake kisu return na kori thokon first braket pasay :void lekbo

/* const handleAddUser = (
  firstName: string,
  age: number,
  address: string
): void => {
  const total: number = 50;
  console.log(firstName, age, address);
  // return total;
}; */

// jode function thake kisu return kori thokon firstbraket pasay je type ardata
//  return hobe sata lekbo abave :string,:number,:boolean

const handleAddUser = (
  firstName: string,
  age: number,
  address: string
): number => {
  const total: number = 50;
  console.log(firstName, age, address);
  return age;
};

function App() {
  return (
    <div className="App">
      <Counter />
      <Users />
    </div>
  );
}

export default App;
