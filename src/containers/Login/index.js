import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Wrapper, Container, H1, Input, Button, InputLabel } from "./styles";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function goPostsListPage() {
    if (email.length === 0) {
      return alert("Please enter an email");
    }
    if (password.length === 0) {
      return alert("Please enter an password");
    }

    history.push("/postslist");
  }

  return (
    <Wrapper>
      <Container>
        <H1>Login</H1>
        <InputLabel>Email</InputLabel>
        <Input
          placeholder="username@gmail.com"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputLabel>Password</InputLabel>
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="https://www.google.com/" target="_blank">
          Forgot Password?
        </a>
        <Button onClick={goPostsListPage}>Sign In</Button>
        <p>Don’t have an account yet?</p>
        <a href="https://www.google.com/" target="_blank">
          Register for free
        </a>
      </Container>
    </Wrapper>
  );
}
export default App;
