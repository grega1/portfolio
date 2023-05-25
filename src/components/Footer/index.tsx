
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";
import twitter from "../../images/twitter.svg";
const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.backGround};
  color: ${({ theme }) => theme.colors.text};
  min-width: 1440px;
  height: 140px;
  display: flex;
  align-items: center;

  justify-content: space-between;
  @media (max-width: 768px) {
    min-width: 400px;
    align-items: start;
    flex-direction: column;
    height: auto;
    gap: 30px;
    padding: 30px 0;
  }
`;
const Credits = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;

  .yellowSpan {
    color: ${({ theme }) => theme.colors.primary};
  }
  .purpleSpan {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
const Social = styled.ul`
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap:10px;
  div{display:flex;align-items:center;gap:10px;}
  li {
    list-style: none;
    font-size: 12px;
    a{
        text-decoration: none;
    }
  }
`;
const Links = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  li {
    list-style: none;
    font-size: 12px;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
      &:hover,
      :focus {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: underline;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Credits>
        <p>
          Developed by <span className="purpleSpan">Adriano Grego</span>.
        </p>
        <p>
          Designed by <span className="purpleSpan">Adriano Grego</span> and{" "}
          <span className="yellowSpan">Jainy Gomes</span>
        </p>{" "}
      </Credits>

      <Links>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Buy me a coffee</Link>
        </li>
        <li>
          <Link to="/">Projects</Link>
        </li>
      </Links>
      <Social>Socials:
        <div>
        <li><Link to="/" ><img src={linkedin} alt="linkedin"/></Link></li>
        <li><Link to="/" ><img src={github} alt="github"/></Link></li>
        <li><Link to="/" ><img src={twitter} alt="twitter"/></Link></li>
        </div>
      </Social>
    </FooterWrapper>
  );
};

export default Footer;
