import * as React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import CircularCard from "../components/CircularCard";
import { circleCardMockup } from "../components/CircularCard/circleCard-mockup";


const Wrapper = styled.div`
   background-color: #161313;
  color:${({ theme }) => theme.colors?.white};
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:20px;
  justify-content: center;
/* margin-top: 200px; */
  @media(max-width: 768px) {
    max-width: 430px;
    width:100%;
    height: auto;

    align-items: center;
    /* margin-top: 150px; */

  }
`;
const Content = styled.div`
  display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap:40px;
  height: 750px;
 max-width: 1200px;
 width: 100%;
  flex-direction: column;
  @media(max-width: 768px) {
    max-width:400px;
    width: 100%;
    height: auto;
    gap:20px;
    grid-template-columns: repeat(6, 1fr);
    overflow-x: scroll;
   justify-items: center;
   padding-left:20px;
    :last-child{
      margin-right: 20px;
    }
  }

`;

const Experiences = () => {
  
  return (
    <Wrapper >
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
