import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Wrapper, Container, H1, Button, Box } from "./styles";

function App() {
  const history = useHistory();
  const [commentsList, setCommentsList] = useEffect([]);
  const [filteredComment, setFilteredComment] = useEffect([]);
  const [activeComment, setActiveComment] = useState(0);

  useEffect(() => {
    async function getComments() {
      const { data: commentsList } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/[ID]/comments"
      );
      setCommentsList([...commentsList, commentsList])

    }
    getComments()
  }, [])

  useEffect(() => {
    const newFilteredComments = commentsList.filter(
      comment => comment.category_id === activeComment
    )

    setFilteredComment(newFilteredComments)
  
  } ,[activeComment, commentsList]);

function goBack() {
  history.push("/postslist")
}

return (
  <Wrapper>
    <Container>
      <H1>Comments</H1>
      <Box>
        {filteredComment &&
          filteredComment.map(comment => (
            <CardComments key={comment.id} comment={comment} />
          ))}
        <Button onClick={goBack}>Back</Button>
      </Box>
    </Container>
  </Wrapper>
);
}
export default App;
