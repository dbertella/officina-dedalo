import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImageProps } from 'gatsby-image'
import { Grid } from 'theme-ui'
import Layout from '../layouts/index'
import { Product } from '../components/Product'

type Product = {
  id: string
  name: string
  price: string
  image: GatsbyImageProps & {
    url: string
  }
}

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
      products: { edges: { node: Product }[] }
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
