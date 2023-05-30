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
