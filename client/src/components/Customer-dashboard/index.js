import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "../../../src/assests/avatar.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import { Dashboard, BusinessInfo, Projects } from "./Components";

const ProjectIcon = <FontAwesomeIcon icon={faTasks} />;
const BusinessIcon = <FontAwesomeIcon icon={faCity} />;
const OverviewIcon = <FontAwesomeIcon icon={faTachometerAlt} />;

const SiderBarWrapper = styled.div`
  padding: 0;
  height: 100vh;
  background: #f7fafb;
`;

const UserID = styled.div`
  display: flex;
  padding: 10px;
  font-weight: 600;
  border-bottom: solid 1px #ddd;
  justify-content: center;
  margin-top: 1em;
`;

const ImgWrapper = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;

  img {
    width: 120px;
  }
`;

const NavWrapper = styled.a`
  border: none;
  padding: 5px;
  border-bottom: solid 1px #ddd;
  cursor: pointer;

  .nav-link {
    border: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .active {
    background-color: #41cbcd66 !important;
    border-color: transparent !important;
  }

  svg {
    position: relative;
    padding: 2px;
    float: left;
    top: 3px;
    margin-right: 10px;
    font-size: 18px;
  }
`;

const UserDashBoard = (props) => {
  const menuItems = [
    {
      index: "1",
      name: "Overview",
      component: Dashboard,
      icon: OverviewIcon,
    },
    {
      index: "2",
      name: "Business Details",
      component: BusinessInfo,
      icon: BusinessIcon,
    },
    {
      index: "3",
      name: "Visa Project",
      component: Projects,
      icon: ProjectIcon,
    },
  ];
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div>
      <Row>
        <Col xs="12" sm="3" md="2">
          <SiderBarWrapper>
            <Nav tabs vertical>
              <UserID>
                <p>MARN: 23663848490</p>
              </UserID>
              <ImgWrapper>
                <img src={Avatar} alt="Avatar" />
              </ImgWrapper>
              {menuItems.map((item, i) => (
                <NavWrapper>
                  <NavItem key={i}>
                    <NavLink
                      className={activeTab === item.index ? "active" : ""}
                      onClick={() => {
                        toggle(item.index);
                      }}
                    >
                      {item.name}
                      {item.icon}
                    </NavLink>
                  </NavItem>
                </NavWrapper>
              ))}
            </Nav>
          </SiderBarWrapper>
        </Col>
        <Col xs="12" sm="9" md="10">
          <TabContent activeTab={activeTab}>
            {menuItems.map((item, i) => (
              <TabPane key={i} tabId={item.index}>
                {item.index === "1" ? (
                  <item.component {...props} />
                ) : (
                  <item.component {...props} />
                )}
              </TabPane>
            ))}
          </TabContent>
        </Col>
      </Row>
    </div>
  );
};

export default UserDashBoard;
