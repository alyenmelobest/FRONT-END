import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  height: 100%;
  min-height: 100vh;

  background-color: #0e0035;
`;

export const Container = styled.div`
  width: 673px;
  height: 524px;
  background: #1a0c3e;
  border-radius: 56px;

  margin-top: 200px;
`;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 64px;
  line-height: 75px;
  margin-top: 50px;

  color: #ffffff;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 55px 203px;
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 30px;
  margin-bottom: 3px;
  margin-left: 8px;
`;

export const Input = styled.input`
  width: 271px;
  height: 50px;

  border-radius: 15px;
  padding: 15px;
  border: none;

  font-weight: 300;
  font-size: 24px;
  line-height: 29px;

  color: #1a0c3e;
`;
export const Button = styled.button`
  width: 185px;
  height: 43px;
  margin: 0 244px;

  display: flex;
  justify-content: center;

  background: rgba(255, 255, 255, 0.47);
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
    background: #4b0082;
    color: #ffffff;
  }
  &:active {
    opacity: 0.7;
  }
`;
