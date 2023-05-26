import * as React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { cardMockup } from "../components/Card/card-mockup";
import Card from "../components/Card";
import Title from "../components/Title";
import useMobile from "../hook/useMobile";

const Wrapper = styled.div`
  background-color: #161313;
  color: ${({ theme }) => theme.colors.text};
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  justify-content: center;
  margin-top: 200px;
  height: 90vh;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 0 20px;
    align-items: center;
    margin-top: 150px;
  }
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 1200;
  height: 800px;
  @media (max-width: 768px) {
    width: 400px;
    height: auto;
    grid-template-columns: repeat(6, 1fr);
    overflow-x: scroll;
  }
`;
const Projects = () => {
  const isMobile = useMobile();
  return (
    <Wrapper>
      <Title text=".Projects" />
      <Content>
        {cardMockup.map((card) => (
          <Card {...card} />
        ))}
      </Content>
      {isMobile ? (<div></div>) : (<Button text="Show More" />)}
    </Wrapper>
  );
};

export default Projects;
