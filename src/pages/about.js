import React from "react";

import Layout from "../components/layout";

import SEO from "../components/seo";
import { PageHeader, Banner } from "../utils";

import back from "../images/bcg/aboutBcg.jpeg";

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={back}>
      <Banner title="About" subtitle="A little About Us" />
    </PageHeader>
  </Layout>
);

export default AboutPage;
