import React, { useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import { Wrapper, Container, H1, Button, Input, Box } from "./styles";

function App() {
  const history = useHistory();
  const { state } = useLocation();
  const [firstName, setFirstName] = useState(state?.user?.first_name);
  const [lastName, setLastName] = useState(state?.user?.last_name);
  const [email, setEmail] = useState(state?.user?.email);
  const [phone, setPhone] = useState(state?.user?.phone);

  async function editData() {
    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      user: state?.user?.id,
    };

    await axios.patch(
      `http://localhost:3001/users/${state?.user?.id}`,
      newUser
    );
    history.push("/userslist");
  }

  return (
    <Wrapper>
      <Container>
        <H1>Edit Info</H1>
        <Box>
          <Input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></Input>
          <Input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></Input>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <Input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></Input>

          <Button onClick={editData}>Save Info</Button>
        </Box>
      </Container>
    </Wrapper>
  );
}
export default App;
