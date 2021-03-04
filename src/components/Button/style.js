import styled from "styled-components";

export const Btn = styled.button`
  border: 2px solid black;
  border-radius: 5px;
  background-color: black;
  color: white;
  transition-duration: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`;
