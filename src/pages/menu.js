import React from "react";

import Layout from "../components/layout";

import SEO from "../components/seo";
import { PageHeader, Banner } from "../utils";

import back from "../images/bcg/menuBcg.jpeg";

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={back}>
      <Banner title="Menu" subtitle={`Let's Dig In`} />
    </PageHeader>
  </Layout>
);

export default MenuPage;
