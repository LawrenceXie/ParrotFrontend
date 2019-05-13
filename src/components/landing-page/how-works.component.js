import React from "react";
import { Flex, vars } from "./../../ui-kit/index";
import styled from "styled-components";

const PPDescription = styled.div`
  font-size: 1.2rem;
  width: 50%;
  line-height: 2rem;
  color: ${vars.colour.blueText};
  margin-right: 25px;
  span {
    display: block;
    margin-bottom: 15px;
  }
`;
const PPHowWorks = styled(Flex)`
  width: 45%;
  justify-content: center;
  flex-direction: column;
  color: ${vars.colour.blueText};
  .bigNum {
    font-size: 7rem;
    margin-right: 20px;
  }
  .instructions {
    line-height: 1.5rem;
  }
  p {
    font-size: 1.8rem;
    margin-top: 0;
    margin-bottom: 7px;
  }
`;
const Row = styled(Flex)`
  width: 100%;
  margin-bottom: 25px;
`;

const Underline = styled.hr`
  color: ${vars.colour.yellowMain};
  margin-bottom: 25px;
`;

const HowWorks = () => {
  return (
    <div>
      <Flex>
        <h3
          style={{
            marginBottom: "20px",
            textAlign: "center"
          }}
        >
          Package Parrot is here to deliver packages in the Greater Toronto
          Area. Whether it's from Kijiji, Craigslist, Facebook groups, or other
          sites; you request it - we'll deliver it.
        </h3>
      </Flex>
      <Underline />
      <Flex>
        <PPDescription>
          <span>
            • No more need to message unresponsive sellers; we'll handle the
            scheduling and pickup.
          </span>
          <span>
            • No more need to withdraw cash; pay below using credit card.
          </span>
          <span>
            • No more worries about shoddy items found online; we'll do a
            quality check before purchase.
          </span>
          <span>
            • And of course, no need to travel; we'll deliver to your front
            door!
          </span>
          <span>
            Package Parrot is the safe, reliable, and fast method of purchasing
            packages online!
          </span>
          <Underline />
          <Flex>
            <div style={{ marginRight: "10px", fontSize: "2rem" }}>
              Pricing:
            </div>
            <div>
              <span style={{ marginBottom: "5px" }}>
                Fits in a backpack - 18$
              </span>
              <span style={{ marginBottom: "5px" }}>
                Fits in a suitcase - 24$
              </span>
              <span style={{ marginBottom: "5px" }}>
                Larger - Variable price capped at $65
              </span>
            </div>
          </Flex>
        </PPDescription>
        <PPHowWorks>
          <Row>
            <span className="bigNum">1.</span>
            <div>
              <p>Request your package</p>
              <span className="instructions">
                Fill out the request form with your name, email, delivery
                address, and URL link for the package. We'll send you an order
                email while we check to confirm availability.
              </span>
            </div>
          </Row>
          <Row>
            <span className="bigNum">2.</span>
            <div>
              <p>Pay for the package</p>
              <span className="instructions">
                After confirming that the item is available, we'll send you an
                email with the package cost according to our pricing table
                below. Pay using our secure payment portal.
              </span>
            </div>
          </Row>
          <Row>
            <span className="bigNum">3.</span>
            <div>
              <p>Collect your package!</p>
              <span className="instructions">
                Sit tight and we'll deliver your package to your address in
                under five days.
              </span>
            </div>
          </Row>
        </PPHowWorks>
      </Flex>{" "}
    </div>
  );
};

export default HowWorks;
