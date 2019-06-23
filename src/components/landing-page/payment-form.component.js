import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Flex, Label, vars, Input } from "./../../ui-kit/index";
import styled from "styled-components";
import axios from "axios";
import logo from "./parrot-icon.png";

const LabelBoxPair = styled(Flex)`
  flex-direction: column;
  width: 50%;
  margin-right: 6px;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const Container = styled(Flex)`
  width: 100%;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLabel = styled(Label)`
  color: ${vars.colour.white};
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;

const StyledInput = styled(Input)`
  max-width: 100%;
  color: ${vars.colour.blueText};
  border-color: ${vars.colour.white};
  border-width: 2px;
  &:focus {
    border-color: ${vars.colour.blueLight};
  }
`;

const StyledStripeCheckout = styled(StripeCheckout)`
  width: 100%;
  height: 2.4em;
  margin-top: 7px;
  background: ${vars.colour.blueMain} !important;
  box-shadow: none !important;
  transition: all 100ms linear;
  span {
    background-image: none !important;
    color: ${vars.colour.white} !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  &:hover {
    background: ${vars.colour.blueDark} !important;
  }
  @media (max-width: 750px) {
    margin-top: 12px;
  }
`;

const StyledHeader = styled.h1`
  margin: 0;
  margin-bottom: 10px;
  @media (max-width: 750px) {
    font-size: 1.7rem;
  }
`;

const Underline = styled.hr`
  color: ${vars.colour.white};
  margin-bottom: 20px;
`;

const Box = styled.div`
  width: 100%;
`;

const PaymentForm = () => {

  const [email, setEmail] = useState(
    new URLSearchParams(window.location.search).get("email")
  );
  const [price, setPrice] = useState(
    new URLSearchParams(window.location.search).get("price")
  );
  
  const publishableKey = "pk_live_pP6IJs02gRwnFvwPdQblnTav00RHplJv4H";

  const onToken = token => {
    const body = {
      amount: price * 100,
      token: token,
      email: email
    };

    if (email && price) {
      axios
        .post("/payment", body)
        .then(res => {
          if (res.status !== 200) {
            alert("Payment Error, please contact support@packageparrot.com");
          } else {
            alert("Payment Success");
          }
        })
        .catch(error => {
          alert("Payment Error");
          alert(error);
        });
    } else {
      alert(
        "Sorry, payment cancelled. Please fill in email and price and try again."
      );
    }
  };

  return (
    <Box>
      <StyledHeader>Pay for your order</StyledHeader>
      <Underline />
      <Container>
        <LabelBoxPair>
          <StyledLabel>Email</StyledLabel>
          <StyledInput
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
          />
        </LabelBoxPair>
        <LabelBoxPair>
          <StyledLabel>Package Price</StyledLabel>
          <StyledInput
            value={price}
            onChange={e => setPrice(e.target.value)}
            type="number"
          />
        </LabelBoxPair>
      </Container>
      <StyledStripeCheckout
        label="Pay now" //Component button text
        name="Package Parrot" //Modal Header
        image={logo}
        description="Delivery Service"
        panelLabel="Pay for package" //Submit button in modal
        amount={price * 100} //Amount in cents
        token={onToken}
        stripeKey={publishableKey}
        billingAddress={false}
      />
    </Box>
  );
};

export default PaymentForm;
