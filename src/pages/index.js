import React, { useMemo } from "react";
import { Link, graphql } from "gatsby";
import Helmet from "react-helmet";
// import Img from "gatsby-image";

import { Layout } from '../components/Layout'
// import { Posts } from '../components/Posts'
// import { SEO } from '../components/SEO'
import { Heading } from "../components/Heading";
import { Hero } from "../components/Hero";
import { projectsList } from "../data/projectsList";
// import { getSimplifiedPosts } from '../utils/helpers'
import config from "../utils/config";

export default function Index() {
    return (
    <div>
      <Helmet title={config.siteTitle} />

      <div className="container">
        <div className="hero-wrapper">
          <Hero title="Hey, I'm Jasmine" index>
            <p className="hero-description small width">
              Welcome to my digital garden. 🌱
              <br />
              <br />
              I'm currently a second-year CS student at the University of
              Michigan. Check out my <Link to="/projects"> projects</Link>!
            </p>
          </Hero>
          <div className="decoration">
            <img
              src="/ram.png"
              alt="RAM Ram"
              className="image hero-image"
              title="RAM Ram"
            />
          </div>
        </div>
      </div>

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
                      href={`https://github.com/taniarascia/${project.slug}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.name}
                    </a>
                    <p>{project.tagline}</p>
                  </div>
                  <div className="anchored links">
                    {project.writeup && (
                      <Link className="button" to={project.writeup}>
                        Article
                      </Link>
                    )}
                    <a className="button flex" href={project.url}>
                      Demo
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};

Index.Layout = Layout
