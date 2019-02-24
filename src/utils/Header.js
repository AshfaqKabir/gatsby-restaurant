import React from "react";

import styled from "styled-components";
import img from "../images/bcg/homeBcg.jpeg";

const IndexHeader = styled.header`
  min-height: calc(100vh - 55.7px);
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
`;

export const HomeHeader = ({ img, children }) => {
  return <IndexHeader img={img}>{children}</IndexHeader>;
};
export const PageHeader = ({ img, children }) => {
  return <DefaultHeader img={img}>{children}</DefaultHeader>;
};

HomeHeader.defaultProps = {
  img: img
};

PageHeader.defaultProps = {
  img: img
};
