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

export const CustomSelectComponent = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option default value="">
        Qualification level
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

export const CustomSelectComponent1 = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option default value="">
        Qualification level
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
export const CustomSelectComponent2 = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option default value="">
        Qualification level
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
