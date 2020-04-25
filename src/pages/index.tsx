import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Grid } from 'theme-ui'
import Layout from '../components/Layout'
import { Product, ProductType } from '../components/Product'

export default () => (
  <StaticQuery
    query={graphql`
      query CatalogueQuery {
        products: allDatoCmsProduct {
          edges {
            node {
              id
              name
              price
              slug
              image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            siteName
            description
          }
        }
      }
    `}
    render={(data: {
      site: {
        siteMetadata: {
          siteName: string
          description: string
        }
      }
      products: { edges: { node: ProductType }[] }
    }) => (
      <Layout site={data.site}>
        <Grid width={['1fr', 280]}>
          {data.products.edges.map(({ node: product }) => (
            <Product key={product.id} product={product} />
          ))}
        </Grid>
      </Layout>
    )}
  />
)
