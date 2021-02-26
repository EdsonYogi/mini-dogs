import styled from "styled-components";

export const Login = styled.section`
  width: 300px;

  label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    letter-spacing: 1px;
  }

  input {
    width: 100%;
    border: 2px solid black;
    border-radius: 5px;
    padding: 7.5px;
  }
  button {
    border: 2px solid black;
    border-radius: 5px;
    padding: 10px 20px;
    background-color: black;
    font-weight: bold;
    color: white;
    letter-spacing: 2px;
    transition-duration: 0.5s;
    cursor: pointer;

    &:hover {
      color: black;
      background-color: white;
    }
  }
`;

export const Username = styled.div`
  margin-bottom: 20px;
`;

export const Password = styled.div`
  margin-bottom: 20px;
`;
