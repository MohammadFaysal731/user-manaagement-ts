import { FC } from "react";
import UserModel from "./types/modal";
// interface Props {
//   name: string;
//   age: number;
//   addUser: () => void;
// }

interface Props {
  user: UserModel;
  addUser: (user: UserModel) => void;
}
const User: FC<Props> = ({ user, addUser }) => {
  return (
    <div>
      <h2>
        Hello Form: {user.name}with experience {user.email}
      </h2>
      <button onClick={() => addUser(user)}>Add Me</button>
    </div>
  );
};

export default User;
