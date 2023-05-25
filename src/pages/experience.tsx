import * as React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import CircularCard from "../components/CircularCard";
import { circleCardMockup } from "../components/CircularCard/circleCard-mockup";

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
    gap:40px;
  height: 750px;
  width: 1200px;
  flex-direction: column;
`;

const Experiences = () => {
  return (
    <Wrapper>
      <Title text=".What I Do?" />
      <Content>
        {circleCardMockup.map((card) => (
          <CircularCard {...card} />
        ))}
      </Content>
    </Wrapper>
  );
};

export default Experiences;
