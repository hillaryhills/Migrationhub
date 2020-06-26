import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col, Jumbotron, Card, CardBody } from "reactstrap";
import LoginForm from "./Loginform";

const LoginWrapper = styled.div`
  display: flex;
  background-color: white;
  .jumbotron {
    margin-top: 50px;
    background-color: #ffffff;
    min-width: 380px;
  
`;

const H4 = styled.h4`
  display: flex;
  display: flex;
  justify-content: center;
  padding: 10px;
  font-size: 16px;
`;

function Login() {
  return (
    <div>
      <Container>
        <Row>
          <Col />
          <Col sm={12} md={6}>
            <LoginWrapper>
              <Jumbotron>
                <H4>Account Login</H4>
                <Card>
                  <CardBody>
                    <LoginForm />
                  </CardBody>
                </Card>
              </Jumbotron>
            </LoginWrapper>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
}
export default Login;
