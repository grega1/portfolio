import React, { ReactNode } from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  background-color: #161313;
  color: ${({ theme }) => theme.colors?.white};
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:250px;
  padding-bottom:200px;
  .right-decoration {
    position: absolute;
    right: 90px;
    bottom: 480px;
  }
  .left-decoration {
    position: absolute;
    left: 90px;
    top: 580px;
  }
  @media (max-width: 768px) {
    width: 100%;
    gap:150px;
    padding-bottom:100px;
    .right-decoration {
      transform: rotate(-90deg);
      right: 400px;
      bottom: 0px;
    }
    .left-decoration {
      transform: rotate(-90deg);
      left: 200px;
      top: 0px;
    }
  }
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
export default Layout;
