import { useState } from "react";

import Card from "./Components/UI/Card/Card";
import AddUser from "./Components/User/AddUser";
import UserList from './Components/UserList/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevState) => {
      return [...prevState, { name: uName, age: uAge, id: Math.random.toString() }];
    });
  }

  return (
    <Card>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </Card>
  );
}

export default App;