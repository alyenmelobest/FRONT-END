import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  height: 100%;
  min-height: 100vh;
  padding: 10px;

  background: #a1a1a1a1;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  background: #ffffff;

  border-radius: 5px;

  margin: 25px;
`;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  position: absolute;
  margin: 40px;
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;

  margin: 200px 0 30px 300px;
`;

export const User = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px 10px 10px 20px;
  width: 1300px;
  height: auto;

  border: solid 1px #a0a0a0;
  list-style: none;

  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  background: #f1f1f1f1;

  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;

  &:hover {
    background-color: #f9db4a;
  }
`;

export const Paragraph = styled.p`
  color: #1a1a;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  
  border: none;
  background-color: transparent;
  cursor: pointer;

  width: 90px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;
