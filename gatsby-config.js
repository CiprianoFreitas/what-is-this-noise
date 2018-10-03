module.exports = {
  siteMetadata: {
    title: 'What is this noise?',
    IGVideos: [
      {
        poster:
          'https://scontent-ams3-1.cdninstagram.com/vp/6f98524a721785987a8961aaa1797957/5BB77F7A/t51.2885-15/e35/36650027_195222514493845_2723332328809037824_n.jpg',
        url:
          'https://scontent-ams3-1.cdninstagram.com/vp/e94722ee95290874694315eb02f46ea9/5BB78327/t50.16885-16/10000000_2090607784593132_4462023059749994496_n.mp4',
      },
      {
        poster:
          'https://scontent-ams3-1.cdninstagram.com/vp/59c45fccf65f0248f0c199af4ca0c183/5BB77805/t51.2885-15/e35/36136957_1729611350422190_196649810701320192_n.jpg',
        url:
          'https://scontent-ams3-1.cdninstagram.com/vp/63e5ecc8849b91a212263c859514e892/5BB7F546/t50.16885-16/10000000_193751218146080_7408523143389642752_n.mp4',
      },
    ],
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
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans:400`, `Kaushan Script:400`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-124634317-1',
      },
    },
  ],
};
