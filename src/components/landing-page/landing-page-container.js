import React from "react";
import { Flex, Button, vars } from "./../../ui-kit/index";
import InfoForm from "./info-form.component";
import PaymentForm from "./payment-form.component";
import HowWorks from "./how-works.component";
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
  @media (max-width: 750px) {
    display: none;
  }
`;

const ButtonRow = styled(Flex)`
  flex-wrap: wrap;
`;

const RowOne = styled(Flex)`
  justify-content: space-between;
  margin-bottom: 1.5rem;

  @media (max-width: 750px) {
    display: block;
    flex-direction: column;
  }
`;

const ImageWrapper = styled(Flex)`
  width: 50%;
  justify-content: center;
  background-image: url(${splashImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
`;

const InfoFormContainer = styled(Flex)`
  width: 50%;
  justify-content: center;
  padding: 1rem 1rem;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const HowItWorks = styled.div`
  justify-content: center;
  background-color: ${vars.colour.yellowLight};
  margin-bottom: 1rem;
  padding: 1.5rem;
  color: #3477db;
  font-weight: 600;

  h3 {
    font-size: 2em;
    line-height: 4rem;
    font-weight: 300;
    margin: 0;
    padding: 0 5rem;
  }
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
  width: 49%;
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
  width: 49%;
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
  font-size: 1.2rem;
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
        <span id="howWorks" />
        <HowWorks />
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
            {/* <div style={{ marginTop: "17px", fontSize: "0.4em" }}>
              Site Icon made by{" "}
              <StyledLink
                href="https://www.freepik.com/?__hstc=57440181.28b69581c746592fae34cb2eb01c94d7.1557704855840.1557704855840.1557704855840.1&__hssc=57440181.2.1557704855841&__hsfp=1290042825"
                title="Freepik"
              >
                Freepik
              </StyledLink>{" "}
              from{" "}
              <StyledLink href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </StyledLink>{" "}
              is licensed by{" "}
              <StyledLink
                href="http://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
              >
                CC 3.0 BY
              </StyledLink>
            </div> */}
          </Box>
        </ContactSection>
      </PaymentContactRow>
    </Page>
  );
};

export default LandingPageContainer;
