import React from "react";
import styled from "styled-components";
import { styles } from "../utils";

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h3 className="subtitle">{subtitle}</h3>
      <h1 className="title">{title}</h1>
      <div className="underline" />
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  text-align: center;
  .subtitle {
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: ".3rem" })};
    font-size: 2rem;
    color: ${styles.colors.mainYellow};
  }
  .title {
    ${styles.letterSpacing({ spacing: ".3rem" })};
    font-size: 2.2rem;
    text-transform: uppercase;
  }
  .underline{
    width: 5rem;
    height: .2rem;
    background: ${styles.colors.mainYellow};
    margin: .5rem auto;
  }
`;

Title.defaultProps = {
  message: "Our MEssage",
  title: "Our Title"
};

export default Title;
