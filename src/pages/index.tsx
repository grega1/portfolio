import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout/Layout"
import Home from "./home"
import AboutMe from "./aboutme"
import Projects from "./projects"
import Experiences from "./experience"
import Contact from "./contact"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../../globalStyles"
import Theme from "../../theme"
import Footer from "../components/Footer"
import Header from "../components/Header"




const IndexPage: React.FC<PageProps> = () => {
  


  return (
    <ThemeProvider theme={Theme}>
  <GlobalStyles />
  <Header />
    <Layout>
      <Home />
      <AboutMe />
      <Projects />
      <Experiences />
      <Contact />
    </Layout>
    <Footer/>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
