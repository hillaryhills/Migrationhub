import React from "react";
import { Form, Input } from "reactstrap";
import styled from "styled-components";

const SearchWrapper = styled.div`
  padding: 2em;
  padding: 14px;
  background: #f7fafb;
  margin-bottom: 6em;
`;

const Index = () => {
  return (
    <SearchWrapper>
      <Form>
        <Input placeholder="searchs" bsSize="lg" />
      </Form>
    </SearchWrapper>
  );
};

export default Index;
