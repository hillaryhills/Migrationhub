import React, { Component } from "react";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";
import {
  CustomSelectComponent,
  CustomSelectComponent1,
  CustomSelectComponent2,
} from "../../container/form/Pre-Assessment/customFields";

const FormWrapper = styled.div`
  display: flex;
  margin-top: 5em;
  padding: 50px;
  max-width: 75%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  input {
    margin-right: 10px;
    padding: 10px;
  }
`;

const FormButton = styled.button`
  color: #fff;
  background: #41cbcd;
  padding: 13px 30px;
  border: none;
  border-radius: 4px;
  font-weight: 700;
`;

const FieldItems = styled.div`
  display: flex;
  select {
    -webkit-appearance: none;
    margin-right: 10px;
    padding: 14px 44px;
    background: #ffffff;
    border: solid 1px #40cbcd;
  }
`;

export class MigrationPreAssessment extends Component {
  render() {
    return (
      <>
        <Grid>
          <form id="migrationform" method="post">
            <FormWrapper>
              <Row className="tetetetet">
                <Col xs={12} md={6}>
                  <p>Get instant help for your migration or eduction help</p>
                  <FieldItems>
                    <Field
                      name="qualification"
                      component={CustomSelectComponent}
                      placeholder="Qualification level"
                    />
                    <Field
                      name="experience"
                      component={CustomSelectComponent1}
                      placeholder="Total years work experience"
                    />
                    <Field
                      name="age"
                      component={CustomSelectComponent2}
                      placeholder="Average age Limit"
                    />
                    <FormButton type="submit">Proceed</FormButton>
                  </FieldItems>
                </Col>
              </Row>
            </FormWrapper>
          </form>
        </Grid>
      </>
    );
  }
}

export default reduxForm({
  form: "migrationform", // <------ same form name
})(MigrationPreAssessment);
