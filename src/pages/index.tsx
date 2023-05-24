import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout/Layout"
import Home from "./home"
import AboutMe from "./aboutme"
import Projects from "./projects"
import Experiences from "./experience"
import Contact from "./contact"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Home />
      <AboutMe />
      <Projects />
      <Experiences />
      <Contact />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
