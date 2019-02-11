import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";

import SEO from "../components/seo";

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Hello From MenuPage</h3>
  </Layout>
);

export default MenuPage;
