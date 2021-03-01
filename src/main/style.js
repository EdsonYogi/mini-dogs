import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: 100vh;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  h1 {
    font-size: 25px;
  }

  button {
    padding: 10px;
  }
`;
