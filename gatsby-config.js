/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
  ],
  siteMetadata: {
    title: 'GrowMyBusiness',
    description: 'We help you boost your sales through online marketing.',
    image: '/favicon.png',
    siteUrl: 'https://www.growmybusiness.agency',
  }
}
