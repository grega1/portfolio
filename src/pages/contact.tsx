import * as React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Title from "../components/Title";
// @ts-ignore
import qrcode from "../images/qrcode.png";

const Wrapper = styled.div`
   background-color: #161313;
  color:  ${({ theme }) => theme.colors?.white};
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  margin-bottom: 100px;
  gap: 20px;
  height: 400px;
  @media(max-width: 768px) {
    max-width: 430px;
    width:100%;
    padding:0 20px;
    align-items: center;

    margin-top: 250px;
    margin-bottom: 200px;

  }
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content:space-between;
  align-items: flex-start;
  gap:450px;
  @media(max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap:50px;

  }
`;
const CTA = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 30px;
  p {
    font-size: 24px;
    text-align: left;
    font-weight: 400;
    line-height: 40px;
  }
  @media(max-width: 768px) {
    width:380px;
    align-items: center;

  }
`;

const QrCode = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
`;

const Contact = () => {
  const redirectToWhatsApp = (message: string): (() => void) => {
    return () => {
      const phoneNumber: string = "+4407930849068";
      const encodedMessage: string = encodeURIComponent(message);
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, `_blank`);
    };
  };
  return (
    <Wrapper>
    
      <Content>
        <CTA>
        <Title text=".Contact" />
          <p>
            Are you interested in my work? Send me a message on WhatsApp, I
            would be happy to chat with you.
          </p>
          <Button
            text="Reach me"
            onClick={redirectToWhatsApp("Hi, I'm interested in your work")}
          />
        </CTA>
        <QrCode src={qrcode} alt="QR Code" />
      </Content>
    </Wrapper>
  );
};

export default Contact;
