import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 400px;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.secondaryPurple};
  padding:40px 30px;
  h2 {
    font-size: 24px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
  }
`;

interface CardProps {
  title: string;
  description: string;
  icons: {
    name: string;
    url: string;
  }[];
  link: string;
}

const Card = ({ title, description, icons, link }: CardProps) => {
  return (
    <CardWrapper>
      <h1>
        {title}
        <Link to={link}></Link>
      </h1>
      <p>{description}</p>
      <div>
        {icons.map((icon) => {
          return <img src={icon.url} alt={icon.name} />;
        })}
      </div>
    </CardWrapper>
  );
};
export default Card;
