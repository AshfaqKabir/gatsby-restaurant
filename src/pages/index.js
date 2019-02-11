import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Hello From Gatsby</h3>
    <Button>
      Click Me
    </Button>
  </Layout>
)

const Button = styled.button`
  background: blue;
  color: #fff;

`
export default IndexPage
