import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.h1`
  color: ${({ theme }) => theme.colors?.secondary};
  font-size:32px;
  border-radius:50px;
  width:100%;
  text-align: left;
  padding-bottom:0.5rem;
  @media(max-width:768px){
    text-align: center;
  }
`;
interface TitleProps {
    text: string;
}

const Title = ({text}:TitleProps) => {
  return <TitleWrapper>{text}</TitleWrapper>;
};

export default Title;
