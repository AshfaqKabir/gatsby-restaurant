import React, { Component } from "react";
import { Section, Title, SectionButton, styles } from "../../utils";
import styled from "styled-components";
import { Link } from "gatsby";

class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title subtitle="Hello" title="our Mission" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            voluptatum consequuntur eaque veritatis consequatur, enim
            temporibus, iste vitae dolore assumenda adipisci nemo labore at
            magnam impedit! Odit necessitatibus cum laborum optio. Ullam
            pariatur, ipsum eligendi distinctio atque sequi, possimus dolorem
            ratione et natus expedita sit! Culpa quo ut sequi laudantium.
          </p>
          <Link to="/about/" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>About</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    );
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`;

export default QuickInfo;
