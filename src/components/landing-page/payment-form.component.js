import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Flex, Label, vars, Input } from "./../../ui-kit/index";
import styled from "styled-components";
import axios from "axios";

const LabelBoxPair = styled(Flex)`
  flex-direction: column;
  width: 35%;
  margin-right: 6px;
`;

const Container = styled(Flex)`
  width: 100%;
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
  width: 25%;
  background: ${vars.colour.blueMain} !important;
  box-shadow: none !important;
  transition: all 300ms linear;
  span {
    background-image: none !important;
    color: ${vars.colour.white} !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  &:hover {
    background: ${vars.colour.blueDark} !important;
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

const Box = styled.div`
  width: 100%;
`;

const PaymentForm = () => {
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState("");
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
      <StyledHeader>Pay for your order here</StyledHeader>
      <Underline />
      <Container>
        <LabelBoxPair>
          <StyledLabel>Email</StyledLabel>
          <StyledInput value={email} onChange={e => setEmail(e.target.value)} />
        </LabelBoxPair>
        <LabelBoxPair>
          <StyledLabel>Package Price</StyledLabel>
          <StyledInput
            value={price}
            onChange={e => setPrice(e.target.value)}
            type="number"
          />
        </LabelBoxPair>
        <StyledStripeCheckout
          label="Pay for Order" //Component button text
          name="Package Parrot" //Modal Header
          panelLabel="Pay for package" //Submit button in modal
          amount={price * 100} //Amount in cents
          token={onToken}
          stripeKey={publishableKey}
          billingAddress={false}
        />
      </Container>
    </Box>
  );
};

export default PaymentForm;
