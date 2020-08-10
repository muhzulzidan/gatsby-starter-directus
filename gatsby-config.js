require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Directus Starter `,
    description: `Gatsby starter using directur as the CMS `,
    author: `@muhzulzidan`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: '@directus/gatsby-source-directus',
      options: {
        url: 'https://demo.directus.io/admin/#/thumper/settings',
        project: '_',
        auth: {
          token: `${process.env.DIRECTUS_USER}`,
          password: `${process.env.DIRECTUS_PASSWORD}`,
        },
        targetStatuses: ['published', 'draft', '__NONE__'],
        blockCollections: ['super_secret_stuff'],
        downloadFiles: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
