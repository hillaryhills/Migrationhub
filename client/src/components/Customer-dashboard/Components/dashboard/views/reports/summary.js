import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-styled-flexboxgrid";
import {
  PayWrapper,
  PayTotalWrapper,
  UnpaidWrapper,
  VisaReportWrapper,
  ConsultWrapper,
} from "./summary.style";
import { Card, CardBody, CardTitle } from "reactstrap";

export class Summary extends Component {
  render() {
    const {
      id,
      migration_visa,
      study_visa,
      other_visa,
      total_amount,
      unpaid_amount,
    } = this.props;
    return (
      <>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <Card className="card-stats">
              <CardBody>
                <h5>Processing application</h5>
                <Row>
                  <Col>
                    <VisaReportWrapper>
                      <div className="numbers">
                        <ul>
                          <li>
                            <span>20{migration_visa}</span>Migration visas
                          </li>
                          <li>
                            <span>10{study_visa}</span>Study visas{" "}
                          </li>
                          <li>
                            <span>5{other_visa}</span>Other visa application{" "}
                          </li>
                        </ul>
                      </div>
                    </VisaReportWrapper>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card className="card-stats">
              <CardBody>
                <PayWrapper>
                  <h5>Payment Summary</h5>
                  <Row>
                    <Col md="4" xs="5">
                      <PayTotalWrapper>
                        <p>Total payout</p>
                        <span>$25000{total_amount}</span>
                      </PayTotalWrapper>
                    </Col>
                    <Col md="8" xs="7">
                      <UnpaidWrapper>
                        <p>Secure escrow balance</p>
                        <span>$50000{unpaid_amount}</span>
                      </UnpaidWrapper>
                    </Col>
                  </Row>
                </PayWrapper>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card className="card-stats">
              <CardBody>
                <ConsultWrapper>
                  <h5>Consultations</h5>
                  <Row>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p>
                          <span>10</span> Waiting Consultations today
                        </p>
                        <CardTitle tag="p">23</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </ConsultWrapper>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default Summary;

Summary.propTypes = {
  id: PropTypes.number,
  migration_visa: PropTypes.number,
  study_visa: PropTypes.number,
  other_visa: PropTypes.number,
  total_amount: PropTypes.number,
  unpaid_amount: PropTypes.number,
};
