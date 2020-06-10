module.exports = {
  pathPrefix: "/ux-fury",
  siteMetadata: {
    title: `La fureur de l'UX`,
    description: `Site porfolio de Gaëlle Molina, UX/UI designer junior à Paris`,
    author: `Gaëlle Molina`,
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
        name: `La fureur de l'UX`,
        short_name: `UX-fury`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` , // This path is relative to the root of the site.
      },
    },
	`gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
