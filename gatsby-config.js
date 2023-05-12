/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `jasmine-website`,
    siteUrl: `https://www.jasminehou.dev`,
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    "gatsby-plugin-mdx",
    `gatsby-transformer-remark`,
    'gatsby-plugin-postcss',
  ],
};
