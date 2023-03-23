import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  height: 100%;
  padding: 10px;

  background-color: #fedcc5;
`;

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  background: #fce7d1;
  border-radius: 5px;
  margin: 25px;
`;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  color: #2a1e17;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
`;

export const Post = styled.li`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 200px;
  padding: 25px;
  width: 70vw;
  height: 200px;

  background: #FFFFFF;
  border: 1px solid #DDDEDF;
  border-radius: 4px;
  list-style: none;

  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #49494F;

  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;

  &:hover {
    opacity: 0.8;
  }

  i {
    width: 30px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  
  border: none;
  background: #f25019;
  color: #FFFFFF;
  cursor: pointer;

  width: 175px;
  height: 150px;
  padding: 2px;

  &:hover {
  background-color: #fedcc5;
  color: #f25019;
  }
  &:active {
    opacity: 0.6;
  }
`;



