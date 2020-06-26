import React, { Component } from "react";
import styled from "styled-components";
import Summary from "./views/reports/summary";
import Recents from "./views/tables/Recents";

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

const Spacer = styled.div`
  padding: 3em;
`;

export class Dashboard extends Component {
  render() {
    return (
      <>
        <ContentWrapper>
          <Summary />
          <Spacer />
          <Recents />
        </ContentWrapper>
      </>
    );
  }
}

export default Dashboard;
