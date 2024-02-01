import * as React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { cardMockup } from "../components/Card/card-mockup";
import Card from "../components/Card";
import Title from "../components/Title";
import useMobile from "../hook/useMobile";

const Wrapper = styled.div`
  background-color: #161313;
  color: ${({ theme }) => theme.colors?.white};
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  justify-content: center;
  height: auto;
  /* pag-top: 200px; */


  @media (max-width: 768px) {
    max-width: 430px;
    width: 100%;
    height: auto;
    align-items: center;
    /* margin-top: 150px; */
  }
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  height: 800px;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 20px;
    align-items: center;
    justify-items: center;
    height: auto;
    grid-template-columns: repeat(6, 1fr);
    overflow-x: scroll;
  }
`;
const Projects = () => {
  const isMobile = useMobile();


  return (
    <Wrapper id="projects">
      <Title text=".Projects" />
      <Content>
        {cardMockup.map((card) => (
          <Card {...card} />
        ))}
      </Content>
      {/* {isMobile ? <div></div> : <Button text="Show More" />} */}
    </Wrapper>
  );
};

export default Projects;
