import React, { Component } from "react";
import RadioButtonGroup from "./RadioButton";
import theme from "../Globals/index";
import { ThemeProvider } from "styled-components";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import BannerIMG from "../../../src/assests/studyabroad.png";
import { TopWrapper, H1, BannerWrapper } from "./Radio.style";
import ServiceSearch from "../../container/ServiceSearch/index";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: undefined,
      radioOptions: [
        { value: "Study", text: "Study Plan" },
        { value: "Migration", text: "Migration Plan" },
        // { value: "PayFees", text: "Payment Service" },
      ],
    };
  }

  handleSelection(value) {
    this.setState({ selectedValue: value });
    if (value == 'Migration') {
      this.props.history.push(`/assessment`);

    }
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid>
          <>
            <TopWrapper>
              <H1>How can we help you with your migration / education?</H1>
              <Row>
                <Col xs={12} md={8}>
                  <RadioButtonGroup
                    listOfItems={this.state.radioOptions}
                    selectedItemCallback={(value) =>
                      this.handleSelection(value)
                    }
                  />
                  <div>
                    <ServiceSearch />
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <BannerWrapper>
                    <img src={BannerIMG} alt="Banner Img" />
                  </BannerWrapper>
                </Col>
              </Row>
            </TopWrapper>
          </>
        </Grid>
      </ThemeProvider>
    );
  }
}

export default index;
