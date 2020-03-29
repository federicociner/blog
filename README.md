# federicociner.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/d83e7b9a-4e4d-4dc5-a8ea-a75fc16a1276/deploy-status)](https://app.netlify.com/sites/federicociner/deploys)

Code for my personal website at [federicociner.com](https://federicociner.com/), built with Gatsby and hosted on Netlify. Currently, it uses the following libraries:

- [KaTex](https://katex.org/) for typesetting math and scientific formulas
- [MDX](https://mdxjs.com/) for blogging and interactive content
- [styled-components](https://styled-components.com/) for the appearance of various components on my site

## Build and Run

To build and run this website locally, you will need to have `npm` and `gatsby-cli` installed on your local development environment. Once you have met these pre-requisites, follow the steps below:

1. Clone this repository locally and `cd` to the root of the project.

   ```sh
   git clone https://github.com/federicociner/federicociner.com \
   && cd federicociner.com
   ```

1. Install dependencies by running `npm install` in the root of the project, which will download required modules to the `node_modules` folder.

1. To run a local development server, run:

   ```sh
   gatsby develop
   ```

1. To create a production build, run:

   ```sh
   gatsby build
   ```

   All of the build files will be available in the `public` folder in the project root directory.

## References

Here's a list of tutorials and resources I used while creating this website:

1. [Making a Gatsby Blog with Netlify CMS](https://www.gatsbyjs.org/tutorial/blog-netlify-cms-tutorial/)
1. [Typography.js](https://kyleamathews.github.io/typography.js/)
1. [Janosh Riebesell's personal website](https://github.com/janosh/janosh.io)
