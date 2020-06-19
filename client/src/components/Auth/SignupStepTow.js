import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col, Jumbotron, Card, CardBody } from "reactstrap";
import SignupStepTowForm from './SignupStepTowForm';

const LoginWrapper = styled.div`
  display: flex;
  background-color: white;
  .jumbotron {
    margin-top: 50px;
    background-color: #ffffff;
    min-width: 380px;
  }
`;

const H4 = styled.h4`
  display: flex;
  display: flex;
  justify-content: center;
  padding: 10px;
  font-size: 16px;
`;

class SignupStepTow extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={12} md={2} />
            <Col sm={12} md={8}>
              <LoginWrapper>
                <Jumbotron style = {{width : '650px'}}>                 
                  {/* <Card>
                    <CardBody> */}
                      {/* <h1>This is Signup step two page</h1> */}
                      <SignupStepTowForm />
                    {/* </CardBody>
                  </Card> */}
                </Jumbotron>
              </LoginWrapper>
            </Col>
            <Col sm={12} md={2} />
          </Row>
        </Container>
      </div>
    );
  }
}


export default SignupStepTow