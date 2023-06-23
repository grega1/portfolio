import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import useMobile from "../../hook/useMobile";
import resume from "../../resume.pdf";
import {useTheme} from "styled-components"

const HeaderWrapper = styled.header`
   background-color: #161313;
  color:${({ theme }) => theme.colors?.white};
  filter: drop-shadow(0px 2px 0px ${({ theme }) => theme.colors?.secondary});
  width:100%;
  height: 100px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  justify-content: center;
  display: flex;
  position: sticky;
  left:0;
  top:0;
  z-index:3;
  align-items: center;
  padding: 0 100px;
  @media(max-width: 768px) {
    width: 100%;
  }
`;
const Content=styled.div`
  max-width: 1200px;
  width: 100%;
  background-color:${({ theme }) => theme.colors?.background};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 768px) {
  max-width: 430px;
  width: 100%;
  padding: 0 30px;
  }
`
const Logo = styled.div`
  color:${({ theme }) => theme.colors?.white};
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.15em;
`;
const Nav = styled.div`
  color:${({ theme }) => theme.colors?.white};
  font-size: 1.5rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:20px;
  a{
    text-decoration: none;
    text-align: center;
    color:${({ theme }) => theme.colors?.white};
    &:hover,:focus{
      color: ${({ theme }) => theme.colors?.primary};
    }
  }
  :last-child {
    margin-left: 30px;
  }
`;

const Header = () => {
  const isMobile = useMobile(); 
  const handleClick = () => {
    const googleDriveLink = 'https://docs.google.com/document/d/1goTh6iq9V_ub_k0IHip56JXM8FLVNzThvmTBCf05M0o/edit?usp=sharing';
    window.open(googleDriveLink, '_blank');
  };
  
  
  return (
    <HeaderWrapper>
      <Content>
      <Logo> G R E G O </Logo>
     {isMobile? (<></>) :(<Nav>
        <Link to="/">About Me</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Experience</Link>
        <Button onClick={handleClick} text="Resume"></Button>
      </Nav>)}
      </Content>
    </HeaderWrapper>
  );
};

export default Header;
