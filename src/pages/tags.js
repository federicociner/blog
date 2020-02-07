import React from "react";
import PropTypes from "prop-types";

// Utilities
import kebabCase from "lodash/kebabCase";

// Components
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Navigation from "../components/nav";
import SEO from "../components/seo";

class Tags extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const tags = data.allMdx.group;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Navigation />
        <SEO title="All tags" />
        <div>
          <h1>Tags</h1>
          <ul>
            {tags.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`tags/${kebabCase(tag.fieldValue)}`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    );
  }
}

// const TagsPage = ({
//   data: {
//     allMdx: { group },
//     site: {
//       siteMetadata: { title }
//     }
//   }
// }) => (
//   <div>
//     <Helmet title={title} />
//     <div>
//       <h1>Tags</h1>
//       <ul>
//         {group.map(tag => (
//           <li key={tag.fieldValue}>
//             <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
//               {tag.fieldValue} ({tag.totalCount})
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// );

// Tags.propTypes = {
//   data: PropTypes.shape({
//     allMdx: PropTypes.shape({
//       group: PropTypes.arrayOf(
//         PropTypes.shape({
//           fieldValue: PropTypes.string.isRequired,
//           totalCount: PropTypes.number.isRequired
//         }).isRequired
//       )
//     }),
//     site: PropTypes.shape({
//       siteMetadata: PropTypes.shape({
//         title: PropTypes.string.isRequired
//       })
//     })
//   })
// };

export default Tags;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
