import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: 100vh;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  h1 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  .user {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 25px;
      font-weight: bold;
      text-transform: capitalize;
      margin-right: 30px;
    }

    .logout {
      height: 50px;
      width: 50px;
      font-size: 20px;
    }
  }
`;

export const Content = styled.div`
  ul {
    max-height: 600px;
    padding: 5px;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  .plus {
    width: 50px;
    height: 50px;
    font-size: 25px;
  }
`;
