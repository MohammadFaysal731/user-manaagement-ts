import { ChangeEvent, FormEvent, useState } from "react";

interface User {
  name?: string;
  job?: string;
}
const Counter = () => {
  const [user, setUser] = useState<User | null>(null);
  const [counter, setCounter] = useState<number>(0);

  const handleUserSubmint = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const userData = {
      name: "admin",
      job: "CEO",
    };
    setUser(userData);
  };

  const handleIncrease = (): void => {
    setCounter(counter + 1);
  };
  const handleDecrease = (): void => {
    setCounter(counter - 1);
  };

  const handleNameChange = (e: ChangeEvent<HTMLFormElement>): void => {};

  return (
    <div>
      <h1>This is Counter</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrease}>InCrease</button>
      <button onClick={handleDecrease}>DeCrease</button>
    </div>
  );
};

export default Counter;
