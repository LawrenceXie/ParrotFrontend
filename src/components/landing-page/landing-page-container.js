import React from 'react';
import { Flex, Button, Image } from './../../ui-kit/index';
import styled from 'styled-components';

const Page = styled.div`
  font-family: Arial, sans-serif;
`;

const TopNav = styled(Flex)`
  justify-content: space-between;
  margin-bottom: 15px;
`;

const RowOne = styled(Flex)`
  justify-content: space-between;
  margin-bottom: 15px;
`;

const ImageWrapper = styled(Flex)`
  box-sizing: border-box;
  width: 50%;
  background-color: grey;
  padding: 10px;
`;

const HowItWorks = styled(Flex)`
  justify-content: center;
  background-color: grey;
  height: 90px;
  margin-bottom: 15px;
`;

const PaymentContactRow = styled(Flex)`
  justify-content: space-between;
  height: 90px;
`;

const PaymentSection = styled(Flex)`
  background-color: red;
  width: 50%;
`;

const ContactSection = styled(Flex)`
  background-color: green;
  width: 50%;
`;

const LandingPageContainer = () => {

  return (
    <Page>
      <TopNav>
        <Button primary>logo guy</Button>
        <Button primary>other buttons</Button>
      </TopNav>
      <RowOne>
        <ImageWrapper>
          <Image width={'100%'} height={'18rem'}
          url={'https://www.woodlandtrust.org.uk/media/100142125/chiffchaff.jpg?cb=302614132&preset=gallery-tab-main-image'}/>
        </ImageWrapper>
        <Flex>form goes here</Flex>
      </RowOne>
      <HowItWorks>
        How it works card here
      </HowItWorks>
      <PaymentContactRow>
        <PaymentSection>
          Payment stuff here
        </PaymentSection>
        <ContactSection>
          contact section here
        </ContactSection>
      </PaymentContactRow>
    </Page>
  );
};

export default LandingPageContainer;
