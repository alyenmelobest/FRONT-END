import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  background-color: #fedcc5;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fce7d1;
  backdrop-filter: blur(15px);
  border-radius: 40px;
  padding: 120px;

  a {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #2a1e17;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #2a1e17;
    margin-bottom: 10px;
  }
`;
export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 46px;
  color: #2a1e17;
  margin-bottom: 28px;
`;
export const InputLabel = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #2a1e17;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 400px;
  height: 50px;
  background: #ffffff;
  border-radius: 5px;
  padding-left: 20px;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  width: 400px;
  height: 50px;
  cursor: pointer;
  margin: 30px 0;

  background: #f25019;
  border-radius: 5px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
`;