import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Content, Image, Info, Name, Views } from "./style";

const Photos = ({ src, name, views }) => {
  return (
    <Content>
      <Image src={src} alt={name} />
      <Info>
        <Name>{name}</Name>
        <Views>
          <FontAwesomeIcon icon="eye" /> {views}
        </Views>
      </Info>
    </Content>
  );
};

export default Photos;
