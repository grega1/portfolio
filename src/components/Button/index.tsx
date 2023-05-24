import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.text};
  padding: 1rem;
  font-size:24px;
  width:160px;
  text-align: center;
  border-radius:50px;
  &:hover,
  :focus {
    border-color: ${({ theme }) => theme.colors.primary};
    color:${({ theme }) => theme.colors.primary};
  }
`;
interface ButtonProps {
    text: string;
}

const Button = ({text}:ButtonProps) => {
  return <ButtonWrapper>{text}</ButtonWrapper>;
};

export default Button;
