import React from "react";
import { Flex, Label, vars } from "./../../ui-kit/index";
import styled from "styled-components";

const Card = styled(Flex)`
  background-color: ${vars.colour.white};
  border-radius: 4px;
  min-width: 420px;
  max-width: 782px;
`;

const InfoForm = () => {
  return (
    <Card>
      <Label>derp</Label>
    </Card>
  );
};

export default InfoForm;
