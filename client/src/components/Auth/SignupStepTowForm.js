import React, { Component } from "react";
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
  AvCheckboxGroup,
  AvCheckbox,
} from "availity-reactstrap-validation";
import { Button, Row, Col, Input, FormGroup } from "reactstrap";
import styled from "styled-components";
import "./SignupStepTowForm.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { AUTH_TOKEN, USER_ID } from '../../constants';

const BtnWrapper = styled.div`
  display: flex;
  .LoginBtn {
    color: #ffffff;
    background: #41cbcd;
    width: 100%;
    border: none;
  }
`;
const user_Id = localStorage.getItem(USER_ID);
class SignupStepTowForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frmFlag1: false,
      frmFlag2: true,
    };
  }

  handleValidSubmit = (event, values) => {
    debugger
    console.log(user_Id);
    this.setState({ email: values.email });
    // console.log(`Login Successful >> `, values);
    const Obj = {
      query: `
        mutation{
          registerAgent(agentRegister : {business_name : "${values.businessname}" ,business_number : ${values.businessnumber},marn : ${values.marnnumber},rating : ${1},status:"unverified",getuser: "${user_Id}"}){
              business_name
              business_number
              marn
            }
          }
        `,
    };
    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL,
      data: JSON.stringify(Obj),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      debugger
      if (res.status === 200) {
        console.log(res.status);
        this.props.history.push(`/dashboard`);
      }
    });
  };

  handleInvalidSubmit = (event, errors, values) => {
    console.log(`Login failed`);
    this.setState({ email: values.email, error: true });
  };

  handleRadio = (event) => {
    switch (event.target.name) {
      case "rdo1":
        this.setState({
          frmFlag1: true,
          frmFlag2: false,
        });
        break;
      case "rdo2":
        this.setState({
          frmFlag1: false,
          frmFlag2: true,
        });
        break;
      default:
        break;
    }
  };

  render() {
    const { frmFlag1, frmFlag2 } = this.state;
    // console.log(frmFlag);

    return (
      <AvForm
        onValidSubmit={this.handleValidSubmit}
        onInvalidSubmit={() =>
          frmFlag1 === true
            ? this.handleInvalidSubmit
            : this.props.history.push(`/dashboard`)
        }
      >
        <Row
          style={{ display: "flex", alignItems: "center", marginBottom: 25 }}
        >
          <Col sm={12} md={9}>
            <h4>Are you a registered migration agent ?</h4>
          </Col>
          <Col
            sm={12}
            md={3}
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <label>Yes</label>
            <input
              type="radio"
              //   value={frmFlag}
              checked={frmFlag1}
              name="rdo1"
              onChange={(e) => this.handleRadio(e)}
            />
            <label>No</label>
            <input
              type="radio"
              checked={frmFlag2}
              //   value={frmFlag}
              name="rdo2"
              onChange={(e) => this.handleRadio(e)}
            />
          </Col>
        </Row>

        <AvField
          name="businessname"
          type="text"
          disabled={frmFlag1 === true ? false : true}
          placeholder="Business Name"
          validate={{
            required: frmFlag1 === true ? true : false,
          }}
        />

        <AvField
          name="businessnumber"
          type="text"
          disabled={frmFlag1 === true ? false : true}
          placeholder="Business Number(ABN)"
          validate={{
            required: frmFlag1 === true ? true : false,
          }}
        />

        <AvField
          name="marnnumber"
          type="text"
          disabled={frmFlag1 === true ? false : true}
          placeholder="MARN Number"
          validate={{
            required: frmFlag1 === true ? true : false,
          }}
        />

        <BtnWrapper>
          <Button className="LoginBtn" id="submit">
            Continue
          </Button>
        </BtnWrapper>
      </AvForm>
    );
  }
}

export default withRouter(SignupStepTowForm);
