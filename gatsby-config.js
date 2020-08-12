require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Directus Starter `,
    description: `A starter template to build websites using  Directus as CMS & Gatsby for FrontEnd `,
    author: `@muhzulzidan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
    //   },
    // },
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: '@directus/gatsby-source-directus',
      options: {
        url: `${process.env.DIRECTUS_API_URL}`,
        project: 'thumper',
        auth: {
          email: `${process.env.DIRECTUS_USER}`,
          password: `${process.env.DIRECTUS_PASSWORD}`,
        },
        targetStatuses: ['published', 'draft', '__NONE__'],
        // blockCollections: [`ticket_notes`, `tickets`, `ticket_files`,  `mailing_list`, `products`,`locations`],
        allowCollections: [`news`, `news_relations`, `directus_files`],
        downloadFiles: false,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    'gatsby-plugin-optimize-svgs',
    {
      resolve: 'gatsby-plugin-slug-field',
      options: {
        filter: {
          internal: {
            type: 'DirectusNews'
          }
        },
        source: 'title',
        fieldName: 'slug',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-directus`,
        short_name: `directus`,
        start_url: `/`,
        background_color: `#263238`,
        theme_color: `#263238`,
        display: `minimal-ui`,
        icon: `src/assets/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
