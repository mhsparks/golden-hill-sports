module.exports = {
  siteMetadata: {
    title: `Golden Hill Sports`,
    description: `Golden Hill Sports | Providing Sporting Facilities for the Youth and Community.`,
    author: `ghs@cyki.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `golden-hill-sports`,
        short_name: `ghs`,
        start_url: `/`,
        background_color: `#28762a`,
        theme_color: `#28762a`,
        display: `minimal-ui`,
        icon: `src/images/ghs-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
  ],
}
