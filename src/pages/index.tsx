import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useInView } from "react-intersection-observer";
import Layout from "../components/Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import AboutMe from "./aboutme";
import Projects from "./projects";
import Experiences from "./experience";
import Contact from "./contact";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../globalStyles";
import Theme from "../../theme";
import Footer from "../components/Footer";
import Header from "../components/Header";

const IndexPage: React.FC<PageProps> = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <Router>
      <Routes>
        <ThemeProvider theme={Theme}>
          <GlobalStyles />
          <Header />
          <Layout>
          <Route path="/" element={<Home />} />
             <Route path="/aboutme" element={<AboutMe />} />
             <Route path="/projects" element={ <Projects />} />
             <Route path="/experiences" element={<Experiences />} />
             <Route path="/contact" element={ <Contact />} />
          </Layout>
          <Footer />
        </ThemeProvider>
      </Routes>
    </Router>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
