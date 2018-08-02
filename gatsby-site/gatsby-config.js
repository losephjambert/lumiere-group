module.exports = {
  siteMetadata: {
    title: 'Lumiere Group',
    footerTitle: 'Lumiere Group Footer Content',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `e7ih4eho2020`,
        accessToken: `5a3fbd9650d5c6cc3771bf673b9a272ce9fb5398f4efaa729e7bdd024d4d3804`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
  
        // WebApp Manifest Configuration
        appName: 'Gatsby site',
        appDescription: 'The Lumiere Group',
        developerName: 'Joe Lambert',
        developerURL: 'jambert.co',
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',
  
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    }
  ],
  
}
