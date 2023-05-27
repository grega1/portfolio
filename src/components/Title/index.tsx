import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.h1`
  color: ${({ theme }) => theme.colors?.secondary};
  font-size:32px;
  border-radius:50px;
`;
interface TitleProps {
    text: string;
}

const Title = ({text}:TitleProps) => {
  return <TitleWrapper>{text}</TitleWrapper>;
};

export default Title;
