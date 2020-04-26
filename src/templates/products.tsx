/** @jsx jsx */
import { FC } from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { jsx, Grid } from 'theme-ui'
import Layout from '../components/Layout'
import { ProductType } from '../components/Product'

type Props = {
  data: {
    datoCmsProduct: ProductType
  }
}

const ProductPage: FC<Props> = ({ data }) => (
  <Layout>
    <article>
      <HelmetDatoCms seo={data.datoCmsProduct.seoMetaTags} />
      <div>
        <h1 sx={{ fontFamily: 'cursive', fontSize: [5, 6], mt: 0 }}>
          {data.datoCmsProduct.name}
        </h1>
        <Img fluid={data.datoCmsProduct.image.fluid} />
        <div
          dangerouslySetInnerHTML={{
            __html: data.datoCmsProduct.descriptionNode.childMarkdownRemark.html,
          }}
        />
        <Grid columns={[1, 2, 3]}>
          {data.datoCmsProduct.imageGallery.map(({ url, fluid }) => (
            <Img key={url} fluid={fluid} />
          ))}
        </Grid>
      </div>
    </article>
  </Layout>
)

export const query = graphql`
  query ProductQuery($slug: String!) {
    datoCmsProduct(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      name
      imageGallery {
        url
        fluid(maxWidth: 300, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      image {
        url
        fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
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
`

export default ProductPage
