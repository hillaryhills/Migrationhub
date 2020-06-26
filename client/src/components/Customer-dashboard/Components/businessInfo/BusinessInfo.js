import React, { Component } from "react";
import { Grid, Row, Col } from "react-styled-flexboxgrid";

export class BusinessInfo extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <p>Processing application</p>
              <ul>
                <li>Migration visas </li>
                <li>Migration visas </li>
                <li>Migration visas </li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default BusinessInfo;
