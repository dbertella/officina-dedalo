require('dotenv').config()

module.exports = {
  siteMetadata: {
    siteName: `🌵Officina Dedalo`,
    description: `Nicola Bruni's e-commerce. Wood and steel products`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-theme-ui`,
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
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Officina Dedalo`,
        short_name: `Officina Dedalo`,
        start_url: `/`,
        background_color: `#669253`,
        theme_color: `#d7f9f1`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins`, `Menlo`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-snipcart`,
      options: {
        apiKey: process.env.SNIPCART_API_TOKEN,
        autopop: true,
      },
    },
  ],
}
