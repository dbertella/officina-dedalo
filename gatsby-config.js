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
        path: path.join(__dirname, `src`, `images`),
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
      resolve: `gatsby-plugin-snipcart`,
      options: {
        apiKey: process.env.SNIPCART_API_TOKEN,
        autopop: true,
      },
    },
  ],
}
