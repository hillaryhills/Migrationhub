import React from "react";
import { Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import styled from "styled-components";
import axios from 'axios';
import { withRouter } from 'react-router-dom'

const BtnWrapper = styled.div`
  display: flex;
  .LoginBtn {
    color: #ffffff;
    background: #41cbcd;
    width: 100%;
    border: none;
  }
`;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: false };
  }

  handleValidSubmit = (event, values) => {
    this.setState({ email: values.email });
    // console.log(`Login Successful >> `, values);

    const Obj = {
      query: `
      mutation{
        registerUser(register : {firstname : "${values.Firstname}" , lastname : "${values.Lastname}", email : "${values.email}", password : "${values.password}"}){
          _id
          email
          firstname
          lastname
      
        }
      }
      `
    }
    axios({
      method: 'post',
      url: process.env.REACT_APP_BASE_URL,
      data: JSON.stringify(Obj),
      headers : {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      console.log('Res >> ', res);
      if (res.status === 200) {
        this.props.history.push(`/signupsteptwo`)
        }
    });

  };

  handleInvalidSubmit = (event, errors, values) => {
    this.setState({ email: values.email, error: true });
    console.log(`Login failed`);
  

  };

  render() {
    console.log('df',process.env.REACT_APP_BASE_URL);
    return (
      <AvForm
        onValidSubmit={this.handleValidSubmit}
        onInvalidSubmit={this.handleInvalidSubmit}
      >
        <AvField
          name="Firstname"
          label="Firstname"
          type="text"
          validate={{
            required: true,
          }}
        />
        <AvField
          name="Lastname"
          label="Lastname"
          type="text"
          validate={{
            required: true,
          }}
        />
        <AvField
          name="email"
          label="Email"
          type="text"
          validate={{
            required: true,
            email: true,
          }}
        />
        <AvField
          name="password"
          label="Password"
          type="password"
          validate={{
            required: {
              value: true,
              errorMessage: "Please enter your password",
            },
            pattern: {
              value: "^[A-Za-z0-9]+$",
              errorMessage:
                "Your password must be composed only with letter and numbers",
            },
            minLength: {
              value: 6,
              errorMessage: "Your password must be between 6 and 16 characters",
            },
            maxLength: {
              value: 16,
              errorMessage: "Your password must be between 6 and 16 characters",
            },
          }}
        />
        <BtnWrapper>
          <Button className="LoginBtn" id="submit">
            Submit
          </Button>
        </BtnWrapper>
      </AvForm>
    );
  }
}

export default withRouter(LoginForm)
