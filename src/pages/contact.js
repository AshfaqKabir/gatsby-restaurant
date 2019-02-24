import React from "react";

import Layout from "../components/layout";

import SEO from "../components/seo";
import { PageHeader, Banner } from "../utils";
import back from "../images/bcg/contactBcg.jpeg";

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={back}>
      <Banner title="Contact" subtitle="Let's Get in Touch" />
    </PageHeader>
  </Layout>
);

export default ContactPage;
