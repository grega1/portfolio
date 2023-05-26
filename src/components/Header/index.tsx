import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import useMobile from "../../hook/useMobile";
import {useTheme} from "styled-components"

const HeaderWrapper = styled.header`
   background-color: #161313;
  color: ${({ theme }) => theme.colors.text};
  filter: drop-shadow(0px 2px 0px ${({ theme }) => theme.colors.secondary});
  min-width: 1440px;
  height: 100px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0 100px;
  @media(max-width: 768px) {
  padding: 0 20px;
  }
`;
const Logo = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.15em;
`;
const Nav = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:20px;
  a{
    text-decoration: none;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    &:hover,:focus{
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  :last-child {
    margin-left: 30px;
  }
`;

const Header = () => {
  const isMobile = useMobile();
  return (
    <HeaderWrapper>
      <Logo> G R E G O </Logo>
     {isMobile? (<></>) :(<Nav>
        <Link to="/">About Me</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Experience</Link>
        <Button text="Resume"></Button>
      </Nav>)}
    </HeaderWrapper>
  );
};

export default Header;
