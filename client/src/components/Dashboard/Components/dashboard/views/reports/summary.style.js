import styled from "styled-components";

export const PayWrapper = styled.div`
  border-radius: 6px;

  p {
    font-size: 18px;
  }

  span {
    padding-left: 4px;
    font-size: 22px;
    font-weight: 700;
    color: #42cbcd;
  }

  h5 {
    padding: 14px 0;
    border-bottom: solid 1px #ddd;
  }
`;

export const PayTotalWrapper = styled.div`
  border-right: solid 1px #ddd;
  margin-right: 10px;
`;

export const UnpaidWrapper = styled.div`
  margin-left: 10px;
`;

export const VisaReportWrapper = styled.div`
  border-radius: 6px;
  ul {
    padding: 0;
    margin-bottom: 13px;
  }

  ul > li {
    font-size: 18px;
    list-style: none;
  }

  span {
    background: #42cbcd;
    width: 30px;
    height: 30px;
    display: inline-block;
    text-align: center;
    margin-right: 10px;
    margin-top: 2px;
  }
`;

export const ConsultWrapper = styled.div`
  h5 {
    padding: 10px 0;
  }
  span {
    background: #00bcd4bf;
    padding: 14px;
    border-radius: 50%;
    color: #ffffff;
    font-size: 34px;
    border: solid 2px;
    float: right;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
