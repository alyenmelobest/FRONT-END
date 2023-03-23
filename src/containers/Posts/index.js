import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Wrapper,
  Container,
  H1,
  Button,
  Post,
} from "./styles";

function App() {
  const history = useHistory();
  const [postsList, setPostsList] = useState([]);
  const [usersPostsList, setUsersPostsList] = useState([])

  useEffect(() => {
    async function getPosts() {
      const { data: postsList } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPostsList([...postsList, postsList]);
    }

    getPosts();
  }, []);

  useEffect(() => {
    async function getUsers() {
      const { data: usersPostsList } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsersPostsList([...usersPostsList, usersPostsList]);

    }
    getUsers();
  }, []);

  function showComments(post) {
    history.push("/form", { post });
  }

  return (
    <Wrapper>
      <Container>
        <H1>Posts</H1>
        <ul>
          <h2>{usersPostsList.username}</h2>
          {postsList.map((post) => (
            <>
              <>{postsList.postsList}</>
              <Post key={post.id}>
                <h3>{post.title}</h3>
                <h4>{post.body}</h4>
                <Button onClick={() => showComments(post)}>Show Comments<i class='bx bxs-comment-detail'></i>
                </Button>
              </Post>
            </>
          ))}
        </ul>
      </Container>
    </Wrapper>
  );
}
export default App;
