import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../../constants';
const TopNavigation = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px #ddd;
`;

const SignupBotton = styled.button`
  background-color: #42cbcd;
  border: none;
  padding: 6px 16px;
  color: #fff;
  border-radius: 4px;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Index = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const history = useHistory();

  return (
    <TopNavigation>
      <Navbar color="white" light expand="sm">
        <NavbarBrand href="/">MigrationHub</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavWrapper>
              <NavItem>
                <NavLink href="#">Language</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Help</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">1 8468 595 9050</NavLink>
              </NavItem>
              {authToken ? (
                <NavItem>
                  <NavLink href="/" className="ml1 pointer black"
                    onClick={() => {
                      localStorage.removeItem(AUTH_TOKEN)
                      history.push('/Home');
                    }}>logout</NavLink>
                </NavItem>
              ) : (
                  <>
                    <NavItem>
                      <NavLink href="/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/signin">
                        <SignupBotton>Sign up</SignupBotton>
                      </NavLink>
                    </NavItem>
                  </>
                )}
            </NavWrapper>
          </Nav>
        </Collapse>
      </Navbar>
    </TopNavigation>
  );
};

export default Index;
