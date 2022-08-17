import { useEffect, useState } from "react";
import UserModal from "./types/modal";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState<UserModal[]>([]);

  const [team, setTeam] = useState<UserModal[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const handleAddUser = (user: UserModal): void => {
    const newTeam = [...team, user];
    setTeam(newTeam);
  };

  return (
    <div>
      <h2>My Users{users.length}</h2>
      <h3>Team Size{team.length}</h3>
      {/* <User name="admin" age={33} addUser={handleAddUser}></User> */}
      {users.map((user) => (
        <User user={user} addUser={handleAddUser}></User>
      ))}
    </div>
  );
};

export default Users;
