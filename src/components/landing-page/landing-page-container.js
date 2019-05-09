import React from "react";
import { Flex, Button, vars } from "./../../ui-kit/index";
import InfoForm from "./info-form.component";
import PaymentForm from "./payment-form.component";
import styled from "styled-components";
import splashImage from "./custom.png";

const Page = styled.div`
  font-family: segan;
  background-color: ${vars.colour.white};
`;

const TopNav = styled(Flex)`
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 1rem 2rem;
`;

const ButtonRow = styled(Flex)`
  flex-wrap: wrap;
`;

const RowOne = styled(Flex)`
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const ImageWrapper = styled(Flex)`
  min-width: 50%;
  justify-content: center;
  background-image: url(${splashImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;

  @media (max-width: 650px) {
    display: none;
  }
`;

const InfoFormContainer = styled(Flex)`
  width: 50%;
  justify-content: center;
  padding: 1rem 1rem;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const HowItWorks = styled(Flex)`
  justify-content: center;
  background-color: ${vars.colour.yellowLight};
  height: 450px;
  margin-bottom: 3rem;
  padding: 2rem;
  color: ${vars.colour.blueText};
  font-weight: 600;
`;

const PaymentContactRow = styled(Flex)`
  justify-content: space-between;
  padding: 0.5rem;
  padding-bottom: 1rem;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PaymentSection = styled(Flex)`
  background-color: ${vars.colour.blueDarker};
  width: 48%;
  border-radius: 4px;
  padding: 2rem;
  color: ${vars.colour.white};
  font-weight: 500;
  margin-bottom: 10px;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const ContactSection = styled(Flex)`
  background-color: ${vars.colour.blueDarker};
  width: 48%;
  border-radius: 4px;
  padding: 2rem;
  color: ${vars.colour.white};
  font-weight: 500;
  margin-bottom: 10px;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const Box = styled.div`
  width: 100%;
`;

const StyledLink = styled.a`
  color: ${vars.colour.white};
  text-decoration: none;
  transition: 200ms all linear;
  &:hover {
    color: ${vars.colour.darkGrey};
  }
`;

const StyledHeader = styled.h1`
  margin: 0;
  margin-bottom: 10px;
`;

const Underline = styled.hr`
  color: ${vars.colour.white};
  margin-bottom: 20px;
`;

const LandingPageContainer = () => {
  return (
    <Page>
      <TopNav>
        <ButtonRow>
          <a
            href="#payment"
            style={{
              textDecoration: "none",
              marginRight: "10px",
              marginBottom: "10px"
            }}
          >
            <Button light>Payment Info</Button>
          </a>
          <a href="#howWorks" style={{ textDecoration: "none" }}>
            <Button light>How it Works</Button>
          </a>
        </ButtonRow>
        <a href="#contact" style={{ textDecoration: "none" }}>
          <Button light>Contact</Button>
        </a>
      </TopNav>
      <RowOne>
        <ImageWrapper />
        <InfoFormContainer>
          <InfoForm />
        </InfoFormContainer>
      </RowOne>
      <HowItWorks>
        <span id="howWorks">How it works card here</span>
      </HowItWorks>
      <PaymentContactRow>
        <PaymentSection>
          <span id="payment" />
          <PaymentForm />
        </PaymentSection>
        <ContactSection>
          <span id="contact" />
          <Box>
            <StyledHeader>Contact</StyledHeader>
            <Underline />
            <StyledLink
              href="mailto:support@packageparrot.com?Subject=Help!"
              target="_top"
            >
              Email: support@packageparrot.com
            </StyledLink>
          </Box>
        </ContactSection>
      </PaymentContactRow>
    </Page>
  );
};

export default LandingPageContainer;
