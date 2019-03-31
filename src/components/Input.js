// import React, { useState, useEffect } from 'react';
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
  background: #373373;
  display: flex;
  flex-direction: reverse;
`;

const InputRow = styled.div``;

function Input() {
  return (
    <Wrapper>
      <InputRow>
        Name: <input />
      </InputRow>
      <p>
        Email: <input />
      </p>
      <p>
        Delivery Address: <input />
      </p>
      <p>
        Comments (OPTIONAL): <input />
      </p>
    </Wrapper>
  );
}

export default Input;
