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
    transition:all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  }
`;
interface ButtonProps {
    text: string;
}

const Button = ({text}:ButtonProps) => {
  return <ButtonWrapper>{text}</ButtonWrapper>;
};

export default Button;
