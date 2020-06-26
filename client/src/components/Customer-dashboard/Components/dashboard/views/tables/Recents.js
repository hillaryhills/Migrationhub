import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

const ViewReportIcon = <FontAwesomeIcon icon={faCheckCircle} />;

const TableWraper = styled.div`
  display: flex;
  flex-direction: column;

  .card-header {
    background-color: #c7ecf13b;
  }
`;

const CardRight = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
  padding-right: 14px;
  span {
    margin-right: 12px;
  }
`;

export default class Recents extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <>
        <TableWraper>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Recent Activites</CardTitle>
                  <CardRight>
                    <Link to="/">
                      <span>{ViewReportIcon}</span>
                    </Link>
                    <Link to="/">
                      <span>{ViewReportIcon}</span>
                    </Link>
                  </CardRight>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Today Activites</th>
                        <th></th>
                        <th></th>
                        <th className="text-right">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td></td>
                        <td></td>
                        <td className="text-right">$36,738</td>
                      </tr>
                      <tr>
                        <td>Minerva Hooper</td>
                        <td></td>
                        <td></td>
                        <td className="text-right">$23,789</td>
                      </tr>
                      <tr>
                        <td>Sage Rodriguez</td>
                        <td></td>
                        <td></td>
                        <td className="text-right">$56,142</td>
                      </tr>
                      <tr>
                        <td>Philip Chaney</td>
                        <td></td>
                        <td></td>
                        <td className="text-right">$38,735</td>
                      </tr>
                      <tr>
                        <td>Doris Greene</td>
                        <td></td>
                        <td></td>
                        <td className="text-right">$63,542</td>
                      </tr>
                      <tr>
                        <td>Mason Porter</td>
                        <td></td>
                        <td></td>
                        <td className="text-right">$78,615</td>
                      </tr>
                      <tr>
                        <td>Jon Porter</td>
                        <td></td>
                        <td></td>
                        <td className="text-right">$98,615</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </TableWraper>
      </>
    );
  }
}
