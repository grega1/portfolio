import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import {useTheme} from "styled-components"

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.backGround};
  color: ${({ theme }) => theme.colors.text};
  filter: drop-shadow(0px 4px 4px #FFFFFF);
  width: 100%;
  height: 100px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0 100px;
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
  }
  :last-child {
    margin-left: 30px;
  }
`;

const Header = () => {
    const theme=useTheme()
  return (
    <HeaderWrapper>
      <Logo> G R E G O </Logo>
      <Nav>
        <Link to="/">About Me</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Experience</Link>
        <Button text="Resume"></Button>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
