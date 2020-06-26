import styled from "styled-components";
import { Link } from "react-router-dom";

export const Spacer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px #ddd;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
  padding-bottom: 20px;

  &:hover {
    transform: scale(1.05, 1.05);
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  position: relative;
  top: 3px;
  margin-right: 5px;
`;

export const ServiceFees = styled.button`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  border: solid 1px #42cbcd;
  padding: 6px;
  white-space: nowrap;
`;

export const FreeService = styled.span`
  display: flex;
  color: #cda642;
  font-weight: 600;
`;

export const EndCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const VerifyiconWrapper = styled.div`
  color: #4caf50;
  font-weight: 800;
  display: inline-flex;
`;

export const P = styled.p`
  margin-bottom: 5px;
`;

export const H5 = styled.h5`
  font-size: 20px;
`;

export const LocationWrapper = styled.div`
  display: flex;
  padding-top: 28px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #42cbcd;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #3be3e6;
  }
`;
