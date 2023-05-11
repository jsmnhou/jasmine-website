import React, { useMemo } from "react";
import { Link, graphql } from "gatsby";
import Helmet from "react-helmet";
// import Img from "gatsby-image";

import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { Heading } from "../components/Heading";
import { Hero } from "../components/Hero";
import { projectsList } from "../data/projectsList";
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
                University of Michigan. Check out my{" "}
                <Link to="/projects"> projects</Link>!
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
                        {project.writeup && (
                          <Link className="button" to={project.writeup}>
                            Article
                          </Link>
                        )}
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
      </div>
    </Layout>
  );
}
// export const pageQuery = graphql`
//   query IndexQuery {
//     latest: allMarkdownRemark(
//       limit: 6
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { template: { eq: "post" } } }
//     ) {
//       edges {
//         node {
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             tags
//             categories
//           }
//         }
//       }
//     }
//     highlights: allMarkdownRemark(
//       limit: 12
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { categories: { eq: "Highlight" } } }
//     ) {
//       edges {
//         node {
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             shortTitle
//             tags
//             thumbnail {
//               childImageSharp {
//                 fixed(width: 45, height: 45) {
//                   ...GatsbyImageSharpFixed
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
