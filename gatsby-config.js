module.exports = {
  siteMetadata: {
    title: 'What is this noise?',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'what-is-this-noise',
        short_name: 'noise',
        start_url: '/',
        background_color: '#FEFF5F',
        theme_color: '#FEFF5F',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open Sans:400`,
          `Kaushan Script:400`,
        ]
      }
    },
  ],
}