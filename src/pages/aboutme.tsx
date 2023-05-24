import * as React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Title from "../components/Title";

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
const Content = styled.div`
    display: flex;
    height: 400px;
    flex-direction: column;
`;   
const AboutMe = () => {
  return (
    <Wrapper>
        <Title text=".About Me" />
      <Content>

        <Button text="Reach me" />
      </Content>
    </Wrapper>
  );
};

export default AboutMe;