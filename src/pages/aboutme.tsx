import * as React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Title from "../components/Title";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backGround};
  color: ${({ theme }) => theme.colors.text};
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 30px;
  height: 90vh;
`;
const Content = styled.div`
  display: flex;
  height: auto;
  width: 1200px;
  flex-direction: column;
  position: relative;
`;
const PurpleDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 730px;
  width: 730px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 10px;
  position: relative;
  padding: 60px;
  p {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 300;
    line-height: 30px;
  }
  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
  }
  div{
    
  }
  ul {
    font-size: 16px;
    padding-top: 20px;
    padding-left:15px;
    font-weight:300;
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap:20px;
    height: 110px;
    li::marker{
        color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  position: absolute;
  border-radius: 10px;
  top: 17%;
  left: 55%;
  img {
    width: 450px;
    height: 450px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    border-radius: 10px;
  }
`;
const YellowDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 450px;
  width: 450px;
  position: relative;
  border-radius: 10px;
`;
const AboutMe = () => {
  return (
    <Wrapper>
      <Title text=".About Me" />
      <Content>
        <PurpleDiv>
          <p>
            Hello! I'm <span>Adriano Grego</span>, a passionate web developer specializing in
            frontend technologies like <span>JavaScript</span>, <span>TypeScript</span>, and <span>React</span>. With
            experience in <span>advertising agencies</span>, <span>startups</span>, <span>and independent
            projects</span>, I create engaging digital products that make a difference.
          </p>
          <p>
            I focus on <span>frontend development</span>, creating dynamic and interactive
            interfaces. Constantly exploring new tools and frameworks, I stay
            up-to-date with industry trends.
          </p>
          <p>
            {" "}
            If you're seeking a <span>dedicated professional</span> with frontend expertise,
            I'm here to contribute to your success.
          </p>
          <div>Few technologies that I recently worked with:
          <ul>
            <li>React</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Material UI </li>
            <li>Bootstrap</li>
            <li>Gatsby</li>
          </ul>
          </div>
        </PurpleDiv>
        <ImageWrapper>
          <img src="https://i.imgur.com/2ZQ4Z5E.png" alt="me" />
          <YellowDiv />
        </ImageWrapper>
      </Content>
    </Wrapper>
  );
};

export default AboutMe;
