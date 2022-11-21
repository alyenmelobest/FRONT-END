import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Wrapper, Container, H1, Button, Input, Box } from "./styles";

function App() {
  const history = useHistory();

  const first_name = useRef();
  const last_name = useRef();
  const email = useRef();
  const phone = useRef();

  const [usersList, setUsersList] = useState([]);
  const [user, setUser] = useState("");

  function editData() {
    const newUser = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      user: user.id
    };

    setUsersList([...usersList, newUser]);
    setUser("");
 
    saveAndGoBack();
  }

  function saveAndGoBack() {
    history.push("/userslist");
  }

  return (
    <Wrapper>
      <Container>
        <H1>Edit Info</H1>
        <Box>
          <Input ref={first_name} placeholder="First Name"></Input>
          <Input ref={last_name} placeholder="Last Name"></Input>
          <Input ref={email} placeholder="Email"></Input>
          <Input ref={phone} placeholder="Phone"></Input>
          <Button onClick={editData}>Save Info</Button>
        </Box>
      </Container>
    </Wrapper>
  );
}
export default App;
