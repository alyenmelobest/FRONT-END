import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Wrapper,
  Container,
  H1,
  Button,
  User,
  Section,
  Paragraph,
} from "./styles";

import Edit from "../../assets/Edit.svg";

function App() {
  const history = useHistory();
  const [usersList, setUsersList] = useState([]);
  const [user, setUser] = useState("");
  const id = user.id

  useEffect(() => {
    async function getUsers() {
      const { data: usersList } = await axios.get(
        "http://localhost:3001/users"
      );

      setUsersList([...usersList, usersList]);
    }

    getUsers();
  }, []);

  function editInfo() {
    const newUsersList = usersList.filter((user) => user.id !== id);
    setUsersList(setUser(), newUsersList);

    history.push("/form");
  }

  return (
    <Wrapper>
      <Container>
        <H1>Users List</H1>
        <Section>
          <ul>
            {usersList.map((user) => (
              <>
                <Paragraph>{usersList.usersList}</Paragraph>
                <User key={user.id}>
                  {user.first_name} {user.last_name} - {user.email} -{" "}
                  {user.phone}
                  <Button onClick={editInfo}>
                    <img src={Edit} alt="edit-info" />
                  </Button>
                </User>
              </>
            ))}
          </ul>
        </Section>
      </Container>
    </Wrapper>
  );
}
export default App;
