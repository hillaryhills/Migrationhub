import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  RadioWrapper,
  RadioItemName,
  RadioLabel,
  RadionInput,
  RadioInputDot,
} from "./Radio.style";

const CheckiconOnly = <FontAwesomeIcon solid icon={faCheck} />;

export default class RadioButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { optionsVal: "Education" };
  }

  handleQueryOpChange(e) {
    this.setState({
      optionsVal: e.target.value,
    });
    this.props.selectedItemCallback(e.target.value);
  }

  render() {
    const renderItems = (item) => {
      return (
        <RadioLabel
          key={item.value}
          checked={this.state.optionsVal === item.value}
        >
          <RadionInput
            type="radio"
            name="options"
            value={item.value}
            checked={this.state.optionsVal === item.value}
            onChange={(e) => this.handleQueryOpChange(e)}
            id={item.value}
          />

          <RadioInputDot checked={this.state.optionsVal === item.value}>
            {CheckiconOnly}
          </RadioInputDot>

          <RadioItemName>{item.text}</RadioItemName>
        </RadioLabel>
      );
    };
    return (
      <RadioWrapper>
        {this.props.listOfItems.map((item) => renderItems(item))}
      </RadioWrapper>
    );
  }
}

RadioButtonGroup.propTypes = {
  listOfItems: PropTypes.array,
  selectedItemCallback: PropTypes.func.isRequired,
};
