import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  height: 100vh;
  padding: 10px;

  background: #a1a1a1a1;
`;

export const Container = styled.div`
  height: 90%;
  width: 80%;

  display: flex;
  flex-direction: row;
  justify-content: center;

  background: #ffffff;

  border-radius: 5px;

  margin: 25px;
`;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: absolute;

  font-size: 55px;

  margin-top: 40px;
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 20px;
`;
export const Input = styled.input`
  width: 450px;
  height: 70px;
  padding: 8px;

  outline: none;
  border: 2px solid #a1a1a1a1;
  border-radius: 10px;

  font-weight: 600;
  font-size: 20px;
  line-height: 39px;

  color: #000000;
`;

export const Button = styled.button`
  width: 185px;
  height: 43px;
  margin-left: 132px;

  display: flex;
  justify-content: center;

  background: #f9d04a;
  border-radius: 19px;
  border: none;
  cursor: pointer;
  outline: none;
  text-decoration: none;

  font-weight: 600;
  font-size: 32px;
  line-height: 39px;

  color: #000000;

  &:hover {
    background: #4b0;
    color: #ffffff;
  }
  &:active {
    opacity: 0.7;
  }
`;
