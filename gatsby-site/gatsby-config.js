module.exports = {
  siteMetadata: {
    title: 'Lumiere Group',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `e7ih4eho2020`,
        accessToken: `5a3fbd9650d5c6cc3771bf673b9a272ce9fb5398f4efaa729e7bdd024d4d3804`,
      },
    },
  ],
  
}
