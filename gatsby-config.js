module.exports = {
  siteMetadata: {
    title: `Federico Ciner`,
    author: `Federico Ciner`,
    description: `My personal website.`,
    siteUrl: `https://federicociner.com/`
  },
  plugins: [
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: `gatsby-remark-vscode`
          },
          {
            resolve: `gatsby-remark-copy-linked-files`
          },
          {
            resolve: `gatsby-remark-smartypants`
          },
          {
            resolve: `gatsby-remark-autolink-headers`
          },
          {
            resolve: `gatsby-remark-katex`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-158733736-1`,
        respectDNT: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Federico Ciner - My Personal Site`,
        short_name: `Federico Ciner`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/images/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: { plugins: [`gatsby-remark-images-anywhere`] }
    }
  ]
};
