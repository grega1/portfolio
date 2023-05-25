import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
display: flex;
flex-direction: column;
  width:375px;
  height:375px;
  background-color: ${({ theme }) => theme.colors.secondaryPurple};
  border-radius:10px;
  gap:10px;
  padding:30px 30px;
  h2 {
    font-size: 20px;
    height:52px;
    font-weight: 700;
    display:flex;
    align-items: center;
    justify-content: space-between;
  }
  p {
    font-size: 15px;
    height:190px;
    font-weight: 300;
  }
  div{
    display: flex;
    gap:10px;
    
  }
  .external-link{
    width: 20px;
    height: 20px;
    align-self:center;
    margin-top:5px;
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
      <h2>
        {title}
        <Link to={link} target="_blank"><svg className="external-link" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></Link>
      </h2>
      <p>{description}</p>
      <label>Languages and Technologies:</label>
      <div>
        
        {icons.map((icon) => {
          return <img src={icon.url} alt={icon.name} />;
        })}
      </div>
    </CardWrapper>
  );
};
export default Card;
