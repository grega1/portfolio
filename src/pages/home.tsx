import * as React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backGround};
  color: ${({ theme }) => theme.colors.text};
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  height: 90vh;
`;
export const Content = styled.div`
  display: flex;
  height: 400px;
  flex-direction: column;
  width:900px;
  margin-bottom: 100px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
  span {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secondary};
  }
  h1 {
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
  }
  p {
    font-size: 20px;
    line-height: 32px;
    color: ${({ theme }) => theme.colors.text};
  }
  :last-child {
    margin: 100px auto 0;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Content>
        <span>Hey, There.</span>
        <h1>I am Adriano Grego. I enjoy build amazing things.</h1>
        <p>
          Software Developer (and occasionally UX/UI Designer) with emphasis in
          Front-End Development. Passionate for building beautiful, useful and
          accessible things. Actually working on Freelance Projects.
        </p>
        <Button text="Reach me" />
      </Content>
    </Wrapper>
  );
};

export default Home;
