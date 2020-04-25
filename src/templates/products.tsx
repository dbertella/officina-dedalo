import React, { FC } from 'react'
import Slider from 'react-slick'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img, { FluidObject } from 'gatsby-image'
import { graphql } from 'gatsby'
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
      <HelmetDatoCms seo={data.datoCmsProduct.seoMetaTags}>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </HelmetDatoCms>
      <div>
        <h1>{data.datoCmsProduct.name}</h1>
        <div>
          <Slider infinite={true} slidesToShow={2} arrows>
            {data.datoCmsProduct.imageGallery.map(({ fluid }) => (
              <img
                alt={data.datoCmsProduct.name}
                key={((fluid as unknown) as FluidObject)?.src}
                src={((fluid as unknown) as FluidObject)?.src}
              />
            ))}
          </Slider>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data.datoCmsProduct.descriptionNode.childMarkdownRemark.html,
          }}
        />
        <div>
          <Img fluid={data.datoCmsProduct.image.fluid} />
        </div>
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
        fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
          src
        }
      }
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      image {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
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
