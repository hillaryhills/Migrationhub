import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faPlay } from "@fortawesome/free-solid-svg-icons";
const ContentWrapper = styled.div`
  display: flex;
  padding: 0 30px 30px;
  min-height: calc(100vh - 123px);
  margin-top: 93px;
  flex-direction: column;

  .card-stats {
    background-color: #c7ecf13b;
    border-radius: 0.25rem;
    height: 200px;
    box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
    border: none;
  }
`;
const Onlinesection = styled.div`
       width: 1230px;
       height: 66px;
       left: 306px;
       top: 207px;
       background: #F7FAFB;
`;
const Spacer = styled.div`
  padding: 3em;
`;
const Icon = styled.span`
left: 80.71%;
right: -40.71%;
top: 80.18%;
bottom: -40.18%;
transform: rotate(179.49deg);
`;
const Texttitle =styled.p`
width: 160px;
height: 21px;
left: 352px;
top: 232px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
/* identical to box height */


color: #000000;

`;

export class Engagement extends Component {
  render() {
    return (
      <>
        <ContentWrapper>
          <Onlinesection>
            <Icon><FontAwesomeIcon icon={faPlay} /></Icon>
            <Texttitle>Start online  section</Texttitle>
          </Onlinesection>
          <Spacer />
        </ContentWrapper>
      </>
    );
  }
}

export default Engagement;
