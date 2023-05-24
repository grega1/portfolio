import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";

const CircularCardWrapper = styled.div`
  width: 350px;
  height: 350px;
  background-color: ${({ theme }) => theme.colors.secondaryPurple};
  border-radius: 50%;
  padding:80px 60px;
  h2 {
    font-size: 24px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
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
      
        <img src={icon.url} alt={icon.name} />;
      
      <h1>{title}</h1>
      <p>{description}</p>
    </CircularCardWrapper>
  );
};
export default CircularCard;
