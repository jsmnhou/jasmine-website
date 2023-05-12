import React, { useMemo } from "react";
import { Link, graphql } from "gatsby";
import Helmet from "react-helmet";
// import Img from "gatsby-image";

import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { Heading } from "../components/Heading";
import { EducationHeading } from "../components/EducationHeading";
import { Hero } from "../components/Hero";
import { projectsList } from "../data/projectsList";
import { contributionsList } from "../data/contributionsList";
import config from "../utils/config";

export default function Index() {
  return (
    <Layout>
      <div>
        <Helmet title={config.siteTitle} />
        <SEO />

        <div className="container">
          <div className="hero-wrapper">
            <Hero title="Hey, I'm Jasmine!" index>
              <p className="hero-description small width">
                <br />
                I'm currently a second-year computer science student at the
                University of Michigan. Feel free to check out my{" "}
                <Link to="/projects"> projects</Link> or simply explore!
                <br />
                <br />
                Thanks for dropping by. 💗
              </p>
            </Hero>
            {/* <div className="decoration">
              <img
                src="/duckbill.png"
                alt="Duckbill"
                className="image hero-image"
                title="DuckBill"
              />
            </div> */}
          </div>
        </div>

        {/* Experience Head */}
        <div className="container">
          <section className="segment large">
            <EducationHeading title="Education" slug="/education" />
          </section>
        </div>

          
        {/* Projects Head */}
        <div className="container">
          <section className="segment large">
            <Heading title="Projects" slug="/projects" />

            <div className="post-preview">
              {projectsList
                .filter((project) => project.highlight)
                .map((project) => {
                  return (
                    <div className="anchored card" key={project.slug}>
                      <div>
                        <time>{project.date}</time>
                        <a
                          className="card-header"
                          href={`https://github.com/jsmnhou/${project.slug}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {project.name}
                        </a>
                        <p>{project.tagline}</p>
                      </div>
                      <div className="anchored links">
                        {/* {project.writeup && (
                          <Link className="button" to={project.writeup}>
                            Article
                          </Link>
                        )} */}
                        <a className="button flex" href={project.url}>
                          View
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>
        </div>

        {/* Open Source Head */}
        <div className="container">
          <section className="segment large">
            <Heading title="Contributions" slug="/projects" />

            <div className="post-preview">
              {contributionsList
                .filter((contribution) => contribution.highlight)
                .map((contribution) => {
                  return (
                    <div className="anchored card" key={contribution.slug}>
                      <div>
                        <time>{contribution.date}</time>
                        <a
                          className="card-header"
                          href={`https://github.com/jsmnhou/${contribution.slug}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {contribution.name}
                        </a>
                        <p>{contribution.tagline}</p>
                      </div>
                      <div className="anchored links">
                        <a className="button flex" href={contribution.url}>
                          View
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
