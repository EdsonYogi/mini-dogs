import styled from "styled-components";

export const Login = styled.section`
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

  .infoUser {
    margin-bottom: 20px;
  }

  .login {
    height: 50px;
    font-size: 18px;
    padding: 0 25px;
  }
`;

export const Username = styled.div`
  margin-bottom: 20px;
`;

export const Password = styled.div`
  margin-bottom: 20px;
`;
