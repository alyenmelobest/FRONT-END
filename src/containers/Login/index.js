import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import AddUser from "../../assets/Add-User.svg";
import Password from "../../assets/Lock.svg";
import {
  Wrapper,
  Container,
  H1,
  Image,
  Input,
  Button,
  Section,
} from "./styles";

function App() {
  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");
  const history = useHistory()

  function goUsersListPage() {
    if (email.length === 0) {
      return alert("Please enter an email");
    }
    if (password.length === 0) {
      return alert("Please enter an password");
    }

    history.push("/userslist")
  }

  return (
    <Wrapper>
      <Container>
        <H1>Login</H1>
        <Section>
          <Image src={AddUser} alt="add-new-user" />
          <Input
            placeholder="Username"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Image src={Password} alt="insert-password" />
          <Input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Section>
        <Button onClick={goUsersListPage} >
          Login
        </Button>
      </Container>
    </Wrapper>
  );
}
export default App;
