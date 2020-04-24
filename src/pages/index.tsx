import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../layouts/index'
import Img, { GatsbyImageProps } from 'gatsby-image'
import { Grid, Box } from 'theme-ui'

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
        <Grid width={[128, null, 192]}>
          {data.products.edges.map(({ node: product }) => (
            <Box key={product.id}>
              <Box
                className="Product snipcart-add-item"
                data-item-id={product.id}
                data-item-price={product.price}
                data-item-image={product.image.url}
                data-item-name={product.name}
                data-item-url={`/`}
              >
                <Box className="Product__image">
                  <Img sizes={product.image.sizes} />
                </Box>
                <Box className="Product__details">
                  <Box className="Product__name">
                    {product.name}
                    <Box className="Product__price">{product.price}€</Box>
                  </Box>
                  <span className="Product__buy">Buy now</span>
                </Box>
              </Box>
            </Box>
          ))}
        </Grid>
      </Layout>
    )}
  />
)
