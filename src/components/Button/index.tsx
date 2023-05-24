import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  font-size:24px;
  width:160px;
  text-align: center;
  border-radius:50px;
  margin:0 auto;
  cursor: pointer;
  &:hover,
  :focus {
    border-color: ${({ theme }) => theme.colors.primary};
    color:${({ theme }) => theme.colors.primary};
  }
`;
interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const Button = ({text, onClick}:ButtonProps) => {
  return <ButtonWrapper onClick={onClick}>{text}</ButtonWrapper>;
};

export default Button;
