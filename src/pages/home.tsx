import * as React from "react";
import styled from "styled-components";
import Button from "../components/Button";


const Wrapper = styled.div`
   background-color: #161313;
  color:${({ theme }) => theme.colors?.white};
  max-width: 1200px;
  display: flex;
  justify-content: center;
  padding-top: 150px;

  @media(max-width: 768px) {
    width:100%;
    padding: 100px 20px 0;
  }
`;
export const Content = styled.div`
  display: flex;
  height: 400px;
  flex-direction: column;
  width:900px;
  margin-bottom: 100px;
  align-items: flex-start;
  justify-content: space-between;
  @keyframes fadeUpAnimation {
    from{
      opacity: 0; 
  transform: translateY(100px); 
    }
    to {
    opacity: 1; 
    transform: translateY(0); 
  }
}
animation: fadeUpAnimation 1.5s ease-out forwards; 
  gap: 30px;
  span {
    font-size: 20px;
    color: ${({ theme }) => theme.colors?.secondary};
  }
  h1,h2 {
    font-size: 50px;
    color: ${({ theme }) => theme.colors?.primary};
  }
  h2{
    margin-top:-25px;
    color: ${({ theme }) => theme.colors?.secondaryYellow};
  }
  p {
    font-size: 20px;
    line-height: 32px;
    color:${({ theme }) => theme.colors?.white};
  }
  button {
    margin: 100px auto 0;
  }
  @media(max-width: 768px) {
    width:370px;

    span {
    font-size: 16px;
    color: ${({ theme }) => theme.colors?.secondary};
  }
  h1,h2 {
    font-size: 30px;
    color: ${({ theme }) => theme.colors?.primary};
  }
  p {
    font-size: 16px;
    line-height: 32px;
    color:${({ theme }) => theme.colors?.white};
  }
  button {
    margin: 50px auto 0;
  }
  }
`;

const Home = () => {

  const redirectToWhatsApp = (message: string): (() => void) => {
    return () => {
      const phoneNumber: string = "+351929160090";
      const encodedMessage: string = encodeURIComponent(message);
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, `_blank`);
    };
  };
  return (
    <Wrapper >
      <Content>
        <span>Hey, There.</span>
        <h1>I am Adriano Grego.</h1>
        <h2>I enjoy building amazing things.</h2>
        <p>
          Software Developer (and occasionally <span>UX/UI Designer</span>) with emphasis in
          Front-End Development. Passionate for building beautiful, useful and
          accessible things. Actually working on Freelance Projects.
        </p>
        <Button text="Reach me" onClick={redirectToWhatsApp("Hi, I'm interested in your work")}/>
      </Content>
    </Wrapper>
  );
};

export default Home;
