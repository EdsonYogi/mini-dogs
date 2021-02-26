import styled from "styled-components";

export const Content = styled.li`
  display: flex;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  display: block;
  width: 75px;
  height: 75px;
  border-radius: 5px 0 0 5px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 0 5px 5px 0;
  padding: 0 20px;
  transition-duration: 0.5s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Name = styled.span`
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const Views = styled.span`
  color: black;
`;
