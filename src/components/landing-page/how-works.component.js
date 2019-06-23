import React from "react";
import { Flex, vars } from "./../../ui-kit/index";
import styled from "styled-components";

const Overview = styled.div`
  font-size: 2em;
  line-height: 4rem;
  font-weight: 300;
  padding: 0px 5rem;
  width: 100%;
  text-align: center;
  color: ${vars.colour.blueText};
  span {
    display: block;
    margin-bottom: 20px;
  }
  @media (max-width: 750px) {
    padding: 0px;
    font-size: 1.5em;
    line-height: 2rem;
    text-align: justify;
  }
`;

const PPDescription = styled.div`
  font-size: 1.2rem;
  width: 100%;
  line-height: 2rem;
  color: ${vars.colour.blueText};
  margin-right: 25px;
  span {
    display: block;
    margin-bottom: 15px;
    text-align: center;
  }
`;
const PPHowWorks = styled(Flex)`
  justify-content: center;
  flex-direction: column;
  color: ${vars.colour.blueText};
  text-align: justify;
  .bigNum {
    font-size: 7rem;
    margin-right: 20px;
  }
  .instructions {
    line-height: 1.5rem;
  }
  p {
    font-size: 1.8rem;
    text-align: left;
    margin-top: 0;
    margin-bottom: 7px;
  }
  @media (max-width: 750px) {
    width: 100%;
    .bigNum {
      font-size: 2.3rem;
    }
    p {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .instructions {
      font-weight: normal;
    }
  }
`;
const Row = styled(Flex)`
  width: 100%;
  margin-bottom: 25px;
  padding-bottom: 25px;
  @media (max-width: 750px) {
    padding-bottom: 5px;
  }
`;

const ReverseFlex = styled(Flex)`
  flex-direction: row-reverse;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const Underline = styled.hr`
  color: ${vars.colour.yellowMain};
  margin-bottom: 25px;
`;

const StyledList = styled.ul`
  margin-left: -20px;
  @media (max-width: 750px) {
    display: none;
  }
`;

const ListItem = styled.li`
  padding-left: 1rem;
`;

const Table = styled.table`
  border: 2px solid;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  table-layout: fixed;
`;

const TableHeader = styled.th`
  border: 1px solid;
  padding-top: 5px;
`;

const TableRow = styled.tr`
  border: 1px solid;
`;

const TableCell = styled.td`
  border: 1px solid;
`;

const HowWorks = () => {
  return (
    <div>
      <Flex>
        <Overview>
          Package Parrot is here to deliver packages in the Greater Toronto
          Area. Whether it's from Kijiji, Craigslist, Facebook groups, or other
          sites; you request it - we'll deliver it.
        </Overview>
      </Flex>
      <Underline />
      <ReverseFlex>
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
        <PPDescription>
          <StyledList>
            <ListItem>
              No more need to message unresponsive sellers; we'll handle the
              scheduling and pickup.
            </ListItem>
            <ListItem>
              No more need to withdraw cash; pay below using credit card.
            </ListItem>
            <ListItem>
              No more worries about shoddy items found online; we'll do a
              quality check before purchase.
            </ListItem>
            <ListItem>
              And of course, no need to travel; we'll deliver to your front
              door!
            </ListItem>
          </StyledList>
          <span>
            Package Parrot is the safe, reliable, and fast method of purchasing
            packages online!
          </span>
          <Underline />
          <div>
            <div style={{ fontSize: "2rem", paddingBottom: "5px" }}>
              Pricing:
            </div>
            <Table>
              <tbody>
                <TableRow>
                  <TableHeader>Size</TableHeader>
                  <TableHeader>Cost</TableHeader>
                </TableRow>
                <TableRow>
                  <TableCell>Fits in a backpack</TableCell>
                  <TableCell>$18</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fits in a suitcase</TableCell>
                  <TableCell>$24</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Larger</TableCell>
                  <TableCell>Variable price, capped at $65</TableCell>
                </TableRow>
              </tbody>
            </Table>
          </div>
        </PPDescription>
      </ReverseFlex>
    </div>
  );
};

export default HowWorks;
