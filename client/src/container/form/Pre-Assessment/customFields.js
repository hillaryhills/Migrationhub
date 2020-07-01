import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const DropDownCar = <FontAwesomeIcon solid icon={faAngleDown} />;

const Error = styled.div`
  color: #dd4b3e;
`;

const DropDownIcon = styled.span`
  float: right;
  margin-top: -36px;
  margin-right: 15px;
  pointer-events: none;
  background-color: #fff;
  padding-right: 2px;
  position: relative;
  color: #40cbcd;
`;

export const CustomSelectComponent = props => {
  debugger
  const { input , meta: { touched, error } } = props;

  return (
  <div>
   <select {...input}  
       onChange={value => input.onChange(value)} 
       onBlur={() => input.onBlur(input.value)} >
      <option  value="">
        Academics Qualification level
      </option>
      <option value="lokaler">Bachalors degree</option>
      <option value="jobb">Masters degree</option>
      <option value="saker-ting">National dipolma</option>
      <option value="evenemang">Doctorate degree</option>
    </select>
    <DropDownIcon>{DropDownCar}</DropDownIcon>
    <Error>{touched && error && error}</Error>
  </div>
);
  }
export const CustomSelectComponent1 = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option default value="">
      Total  years work experience 
      </option>
      <option value="lokaler">2 - 5yrs work experience</option>
      <option value="jobb">2 - 5yrs work experience</option>
      <option value="saker-ting">2 - 5yrs work experience</option>
      <option value="evenemang">2 - 5yrs work experience</option>
    </select>
    <DropDownIcon>{DropDownCar}</DropDownIcon>
    <Error>{touched && error && error}</Error>
  </div>
);
export const CustomSelectComponent2 = ({ input, meta: { touched, error } }) => (
  <div>
<select {...input}>
      <option default value="">
      Average age Limit
      </option>
      <option value="lokaler">20 - 25yrs work experience</option>
      <option value="jobb">20 - 25yrs work experience</option>
      <option value="saker-ting">20 - 25yrs work experience</option>
      <option value="evenemang">20 - 25yrs work experience</option>
    </select>
    
    <DropDownIcon>{DropDownCar}</DropDownIcon>
    <Error>{touched && error && error}</Error>
  </div>
);
