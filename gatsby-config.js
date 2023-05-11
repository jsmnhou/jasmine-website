/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `jasmine-website`,
    // siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    // ===================================================================================
    // Meta
    // ===================================================================================
    "gatsby-plugin-react-helmet",
    // ===================================================================================
    // Images and static
    // ===================================================================================
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // // ===================================================================================
    // // Search
    // // ===================================================================================
    // {
    //   resolve: "gatsby-plugin-local-search",
    //   options: {
    //     name: "pages",
    //     engine: "flexsearch",
    //     engineOptions: {
    //       encode: "icase",
    //       tokenize: "forward",
    //       async: false,
    //     },
    //     query: `
    //       {
    //         allMarkdownRemark(filter: { frontmatter: { template: { eq: "post" } } }) {
    //           nodes {
    //             id
    //             frontmatter {
    //               title
    //               tags
    //               slug
    //               date(formatString: "MMMM DD, YYYY")
    //             }
    //             rawMarkdownBody
    //           }
    //         }
    //       }
    //     `,
    //     ref: "id",
    //     index: ["title", "tags"],
    //     store: ["id", "slug", "title", "tags", "date"],
    //     normalizer: ({ data }) =>
    //       data.allMarkdownRemark.nodes.map((node) => ({
    //         id: node.id,
    //         slug: `/${node.frontmatter.slug}`,
    //         title: node.frontmatter.title,
    //         body: node.rawMarkdownBody,
    //         tags: node.frontmatter.tags,
    //         categories: node.frontmatter.categories,
    //         date: node.frontmatter.date,
    //       })),
    //   },
    // },
    // // ===================================================================================
    // // Markdown
    // // ===================================================================================
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     plugins: [
    //       "gatsby-remark-autolink-headers",
    //       {
    //         resolve: "gatsby-remark-images",
    //         options: {
    //           maxWidth: 800,
    //           // linkImagesToOriginal: false,
    //           backgroundColor: "transparent",
    //         },
    //       },
    //       {
    //         resolve: "gatsby-remark-prismjs",
    //         options: {
    //           classPrefix: "language-",
    //           inlineCodeMarker: null,
    //           aliases: {},
    //           showLineNumbers: false,
    //           noInlineHighlight: false,
    //           prompt: {
    //             user: "root",
    //             host: "localhost",
    //             global: true,
    //           },
    //         },
    //       },
    //     ],
    //   },
    // },
  ],
};
