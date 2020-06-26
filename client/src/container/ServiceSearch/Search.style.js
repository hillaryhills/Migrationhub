import styled from "styled-components";

export const SearchInput = styled.input`
  width: 70%;
  height: 50px;
  display: flex;
  border: solid 1px #00bcd4;
  padding-left: 12px;
`;

export const FormatSearchResult = styled.ul`
  list-style-type: none;
  columns: 2;
  margin-top: 24px;
  padding: 0;
  display: inline-block;
  width: 70%;
`;

export const SearchListItem = styled.li`
  font-size: 16px;
  padding: 5px;
  cursor: pointer;
`;

export const SearchTitle = styled.h4`
  padding: 40px 0 10px 0;
  font-size: 18px;
`;
