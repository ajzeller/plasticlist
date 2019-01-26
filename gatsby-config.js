module.exports = {
  siteMetadata: {
    title: `Plastic List`,
    description: `Find your next credit card`,
    author: `@andrewjzeller`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-antd',
    // 'gatsby-plugin-favicon',
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
        name: `Plastic List`,
        short_name: `Plastic List`,
        start_url: `/`,
        background_color: `#117ACA`,
        theme_color: `#117ACA`,
        display: `standalone`,
        icon: `src/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',

    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `appk55LmpgREWJdCj`,
            tableName: `Credit_Cards`,
            tableView: `List`,
            mapping: { perks: `text/markdown` },
            tableLinks: [`rewards_program`],
          },
          {
            baseId: `appk55LmpgREWJdCj`,
            tableName: `Rewards_Programs`,
            tableView: `List`,
            // mapping: { 'COLUMN NAME': `VALUE_FORMAT` },
            tableLinks: [`cards`],
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
