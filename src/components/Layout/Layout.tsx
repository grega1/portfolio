import React, { ReactNode } from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backGround};
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:100px;
  justify-content: center;
  .right-decoration {
    position: fixed;
    right: 90px;
    bottom: 480px;
  }
  .left-decoration {
    position: fixed;
    left: 90px;
    top: 580px;
  }
  @media (max-width: 768px) {
    width: 100%;
    .right-decoration {
        transform: rotate(-90deg);
        right: 400px;
        bottom:0px;
    }
    .left-decoration {
        transform: rotate(-90deg);
        left:200px;
        top:0px;
    }
  }
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <svg
        width="20"
        height="331"
        viewBox="0 0 20 331"
        fill="none"
        className="left-decoration"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="10" fill="#FFC107" />
        <circle cx="10" cy="90" r="10" fill="#FFC107" />
        <circle cx="10" cy="50" r="10" fill="#FFC107" />
        <line
          x1="9"
          y1="331"
          x2="9"
          y2="131"
          stroke="#FFC107"
          stroke-width="2"
        />
      </svg>
      <main>{children}</main>
      <svg
        width="20"
        height="320"
        viewBox="0 0 20 320"
        className="right-decoration"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="230" r="10" fill="#FFC107" />
        <circle cx="10" cy="310" r="10" fill="#FFC107" />
        <circle cx="10" cy="270" r="10" fill="#FFC107" />
        <line x1="9" y1="200" x2="9" stroke="#FFC107" stroke-width="2" />
      </svg>

      <Footer />
    </Wrapper>
  );
};
export default Layout;
