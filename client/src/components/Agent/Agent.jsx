import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import Avatar from "../../../src/assests/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import {
  Spacer,
  H5,
  P,
  CardWrapper,
  ServiceFees,
  IconWrapper,
  FreeService,
  EndCardWrapper,
  VerifyiconWrapper,
  LocationWrapper,
  StyledLink,
} from "./Agent.style";

const Checkicon = <FontAwesomeIcon icon={faCheckCircle} />;
const Verifyicon = <FontAwesomeIcon icon={faShieldAlt} />;
const Locationicon = <FontAwesomeIcon icon={faGlobeAsia} />;
const Emailicon = <FontAwesomeIcon icon={faEnvelope} />;
const Chaticon = <FontAwesomeIcon icon={faComment} />;
const Infoicon = <FontAwesomeIcon icon={faInfoCircle} />;
const Scheduleicon = <FontAwesomeIcon icon={faCalendarAlt} />;

export class Agent extends Component {
  render() {
    const {
      id,
      agentStatus,
      business_name,
      marn_number,
      rating,
      status,
      isInstallment = true,
      servicefees,
      isFreeconsult = true,
      agentlocation,
    } = this.props;
    return (
      <>
        <Grid fluid>
          <CardWrapper>
            <Row>
              <Col md={2} lg={2}>
                <img alt="img" src={Avatar} />
              </Col>
              <Col md={4} lg={4}>
                <Spacer>
                  <P>
                    <VerifyiconWrapper>
                      <IconWrapper>{Checkicon}</IconWrapper>
                      application success rate{agentStatus}
                    </VerifyiconWrapper>
                    <br />
                    <strong>Business Name:</strong> {business_name}
                    <br />
                    <strong>MRN Number:</strong> {marn_number}
                    <br />
                    <strong>Rating:</strong> {rating}
                    <br />
                  </P>
                  <VerifyiconWrapper>
                    <IconWrapper>{Verifyicon}</IconWrapper>
                    {status}
                  </VerifyiconWrapper>
                </Spacer>
              </Col>
              <Col md={3}>
                <Spacer>
                  <LocationWrapper>
                    <H5>
                      Agent location
                      <br />
                      <IconWrapper>{Locationicon}</IconWrapper>
                      <StyledLink to="/">{agentlocation}</StyledLink>
                      <br />
                    </H5>
                  </LocationWrapper>
                </Spacer>
              </Col>
              <Col lg={3}>
                <Spacer>
                  <EndCardWrapper>
                    <StyledLink to="/">
                      <IconWrapper>{Emailicon}</IconWrapper>
                      <IconWrapper>{Chaticon}</IconWrapper>
                      online
                    </StyledLink>
                    <StyledLink to="/">
                      {" "}
                      <IconWrapper>{Scheduleicon}</IconWrapper>
                      Schedule call online
                    </StyledLink>
                    {isFreeconsult && <FreeService>30 mins free</FreeService>}
                    <ServiceFees>Service fees: {servicefees}</ServiceFees>
                    {isInstallment && (
                      <p>
                        Accept 3 Intallment payment
                        <IconWrapper>{Infoicon}</IconWrapper>
                      </p>
                    )}
                  </EndCardWrapper>
                </Spacer>
              </Col>
            </Row>
          </CardWrapper>
        </Grid>
      </>
    );
  }
}

export default Agent;

Agent.propTypes = {
  id: PropTypes.number,
  agentStatus: PropTypes.string,
  business_name: PropTypes.string,
  marn_number: PropTypes.number,
  rating: PropTypes.string,
  status: PropTypes.string,
  installment: PropTypes.bool,
  servicefees: PropTypes.string,
  freeconsult: PropTypes.bool,
  agentlocation: PropTypes.string,
};
