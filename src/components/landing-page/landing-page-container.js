import React from "react";
import { Flex, Button, vars } from "./../../ui-kit/index";
import InfoForm from "./info-form.component";
import styled from "styled-components";
import splashImage from "./parrot.png";

const Page = styled.div`
  font-family: segan;
  background-color: ${vars.colour.kijPurple};
`;

const TopNav = styled(Flex)`
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 1rem 2rem;
`;

const RowOne = styled(Flex)`
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const ImageWrapper = styled(Flex)`
  min-width: 50%;
  background-color: ${vars.colour.greyLighter};
  padding: 1rem;
  justify-content: center;
  background: url(${splashImage}) no-repeat center center scroll;

  @media (max-width: 650px) {
    display: none;
  }
`;

const InfoFormContainer = styled(Flex)`
  width: 50%;
  justify-content: center;
  padding: 1rem 2rem;
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
  height: 150px;
  padding: 0.5rem;
  padding-bottom: 1rem;
`;

const PaymentSection = styled(Flex)`
  background-color: ${vars.colour.redLight};
  min-width: 48%;
  border-radius: 4px;
  padding: 2rem;
  color: ${vars.colour.white};
  font-weight: 500;
`;

const ContactSection = styled(Flex)`
  background-color: ${vars.colour.redLight};
  width: 48%;
  border-radius: 4px;
  padding: 2rem;
  color: ${vars.colour.white};
  font-weight: 500;
`;

const LandingPageContainer = () => {
  return (
    <Page>
      <TopNav>
        <Button primary>logo guy</Button>
        <Button primary>other buttons</Button>
      </TopNav>
      <RowOne>
        <ImageWrapper />
        <InfoFormContainer>
          <InfoForm />
        </InfoFormContainer>
      </RowOne>
      <HowItWorks>How it works card here</HowItWorks>
      <PaymentContactRow>
        <PaymentSection>Payment stuff here</PaymentSection>
        <ContactSection>Contact section here</ContactSection>
      </PaymentContactRow>
    </Page>
  );
};

export default LandingPageContainer;
