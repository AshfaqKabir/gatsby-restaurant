import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import back from "../images/bcg/homeBcg.jpeg";

import QuickInfo from "../components/HomePage/QuickInfo";
import Gallery from "../components/HomePage/Gallery";

import { HomeHeader, Banner, BannerButton } from "../utils";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <HomeHeader img={back}>
      <Banner title="Eatery" subtitle="55 Main Street - Santa Monica, CA">
        <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
  </Layout>
);

export default IndexPage;
