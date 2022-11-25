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

  useEffect(() => {
    async function getUsers() {
      const { data: usersList } = await axios.get(
        "http://localhost:3001/users"
      );

      setUsersList([...usersList, usersList]);
    }

    getUsers();
  }, []);

  function editInfo(user) {
    history.push("/form", { user });
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
                  <Button onClick={() => editInfo(user)}>
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
