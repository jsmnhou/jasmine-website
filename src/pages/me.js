import React, { useMemo } from "react";
import { Link, graphql } from "gatsby";
import Helmet from "react-helmet";
import { Hero } from "../components/Hero";

import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import config from "../utils/config";
import { AboutSidebar } from "../components/AboutSidebar";

export default function About() {
  const title = "About Me";
  const description = "Jasmine Hou About Me Page";

  return (
    <Layout>
      <div>
        <Helmet title={`${title} | ${config.siteTitle}`} />
        <SEO customDescription={description} />

        <div className="container">
          <div className="hero-wrapper">
            <Hero title="About Me">
              <p className="hero-description small width">
                Hey, I'm Jasmine! I grew up in the Bay Area, and I'm currently
                in my second year as a computer science student at the
                University of Michigan. (Go Blue!)
                <br />
                <br />
                Contact me anytime at jsmnhou @ gmail; I would love to chat!
              </p>
            </Hero>
            <AboutSidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
}

{
  /* <Hero title={title} /> */
}
