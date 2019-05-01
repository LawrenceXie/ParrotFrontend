import React, { useState } from "react";
import { Flex, Label, vars, Input, Button } from "./../../ui-kit/index";
import styled from "styled-components";

const Card = styled(Flex)`
  background-color: ${vars.colour.blueDarker};
  flex-direction: column;
  border-radius: 4px;
  padding: 1rem 2rem;
  min-width: 70%;
  max-width: 100%;
  box-shadow: 5px 10px 1px ${vars.colour.darkBlack};
`;

const Header = styled.h1`
  color: ${vars.colour.blueMain};
`;

const LabelBoxPair = styled(Flex)`
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
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

const InfoForm = () => {
  const [itemLink, setItemLink] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  return (
    <Card>
      <Header>Your order info below</Header>
      <LabelBoxPair>
        <StyledLabel>Link to item</StyledLabel>
        <StyledInput
          value={itemLink}
          onChange={e => setItemLink(e.target.value)}
        />
      </LabelBoxPair>
      <LabelBoxPair>
        <StyledLabel>Name</StyledLabel>
        <StyledInput value={name} onChange={e => setName(e.target.value)} />
      </LabelBoxPair>
      <LabelBoxPair>
        <StyledLabel>Email</StyledLabel>
        <StyledInput value={email} onChange={e => setEmail(e.target.value)} />
      </LabelBoxPair>
      <LabelBoxPair>
        <StyledLabel>Delivery Address</StyledLabel>
        <StyledInput
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </LabelBoxPair>
      <Button
        primary
        onClick={() => {
          if (itemLink && name && email && address) {
            const deliveryOrder = { itemLink, name, email, address };
            console.log(deliveryOrder);
          } else {
            alert("Please fill in all the fields");
          }
        }}
      >
        Submit
      </Button>
    </Card>
  );
};

export default InfoForm;
