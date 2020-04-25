/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise(resolve => {
    graphql(`
      {
        allDatoCmsProduct {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsProduct.edges.map(({ node: product }) => {
        createPage({
          path: `products/${product.slug}`,
          component: path.resolve(`./src/templates/products.tsx`),
          context: {
            slug: product.slug,
          },
        })
      })
      resolve()
    })
  })
}
