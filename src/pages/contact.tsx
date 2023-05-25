import * as React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Title from "../components/Title";
// import qrcode from "../../images/qrcode.png";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backGround};
  color: ${({ theme }) => theme.colors.text};
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 200px;
  margin-bottom: 100px;
  gap: 20px;
  height: 400px;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
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
        <QrCode src={"qrcode"} alt="QR Code" />
      </Content>
    </Wrapper>
  );
};

export default Contact;
