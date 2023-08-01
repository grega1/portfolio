import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";

const CircularCardWrapper = styled.div`
  width: 350px;
  height: 350px;
  background-color: ${({ theme }) => theme.colors?.secondary};
  border-radius: 50%;
  padding: 80px 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @keyframes showingByCenter{
    0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1); /* O componente terá 100% do tamanho original quando a animação terminar */
  }
  
  }
  animation: showingByCenter 2s ease-out;
  img{
    margin: 0 auto;
  }
  h2 {
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors?.primary};
  }
  p {
    font-size: 16px;
    width:250px;
  }
  &:hover,
  :focus {
    border-color: ${({ theme }) => theme.colors?.primary};
    color:${({ theme }) => theme.colors?.primary};

    box-shadow: 4px 4px 0 0 ${({ theme }) => theme.colors?.primary};
    transform: translate(-5px, -5px);
    transition: all 0.25s ease-in-out;
    }
  
`;

interface CircularCardProps {
  title: string;
  description: string;
  icon: {
    name: string;
    url: string;
  };
}

const CircularCard = ({ title, description, icon }: CircularCardProps) => {
  
  return (
    <CircularCardWrapper>
      <img src={icon.url} alt={icon.name} /><h2>{title}</h2>
      <p>{description}</p>
    </CircularCardWrapper>
  );
};
export default CircularCard;
