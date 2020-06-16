import styled, { css } from "styled-components";

export const RadioWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const RadioItemName = styled.span`
  color: #4b4a4a;
  font-size: 20px;
`;

export const RadioLabel = styled.label`
  display: inline-flex;
  height: 68px;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  max-width: 100%;
  border: solid 1px transparent;
  margin-right: 2em;

  &:hover {
    transform: scale(1.05, 1.05);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  ${({ checked }) =>
    checked &&
    css`
      border: solid 1px #42cbcd;
      opacity: 1;
      border-radius: 4px;
      transform: scale(1.05, 1.05);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      margin-right: 1em;
    `};
`;

export const RadionInput = styled.input`
  position: absolute !important;
  clip: rect(0, 0, 0, 0) !important;
  pointer-events: none;
`;

export const RadioInputDot = styled.div`
  display: flex;
  opacity: 0;
  transform: scale(1.05, 1.05);

  ${({ checked }) =>
    checked &&
    css`
      opacity: 1;
      position: absolute;
      right: -12px;
      background: #42cbcd;
      color: #fff;
      padding: 5px;
      border-radius: 50%;
      transform: scale(1);
    `};
`;

export const TopWrapper = styled.div`
  display: flex;
  margin-top: 8em;
  flex-direction: column;
`;

export const BannerWrapper = styled.div`
  border: solid 1px;
  height: 40vh;
  background: #f7fafb;
  display: flex;
  color: #ffff;
  margin-left: 36px;

  img {
    max-width: 360px;
  }
`;

export const H1 = styled.h1`
  font-size: 20px;
  padding-bottom: 20px;
`;
