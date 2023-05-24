import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout/Layout"
import Home from "./home"
import AboutMe from "./aboutme"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Home />
      <AboutMe />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
