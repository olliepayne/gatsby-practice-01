module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby-practice-01",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
