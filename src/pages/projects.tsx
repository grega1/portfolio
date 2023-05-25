import * as React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { cardMockup } from "../components/Card/card-mockup";
import Card from "../components/Card";
import Title from "../components/Title";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backGround};
  color: ${({ theme }) => theme.colors.text};
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap:20px;
  justify-content: center;
 margin-top: 200px;
  height: 90vh;
`;
const Content = styled.div`
  display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  width: 1200;
  height: 800px;
`;
const Projects = () => {
  return (
    <Wrapper>
        <Title text=".Projects" />
      <Content>
        {cardMockup.map((card) => (
          <Card {...card} />
        ))}
      </Content>
      <Button text="Show More" />
    </Wrapper>
  );
};

export default Projects;
