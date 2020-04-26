/** @jsx jsx */
import { FC } from 'react'
import Img, { GatsbyImageProps } from 'gatsby-image'

import { Box, Card, jsx } from 'theme-ui'
import { Link } from 'gatsby'

type CmsImage = GatsbyImageProps & {
  url: string
}

export type ProductType = {
  id: string
  name: string
  price: string
  image: CmsImage
  imageGallery: CmsImage[]
  video: {
    url: string
    title: string
    provider: string
    thumbnailUrl: string
  }
  description: string
  descriptionNode: any
  slug: string
  seo: {
    title: string
    description: string
    twitterCard: string
    image: string
  }
  seoMetaTags: any
}

type Props = {
  product: ProductType
}
export const Product: FC<Props> = ({ product }) => (
  <Card key={product.id} sx={{ variant: 'primary', cursor: 'pointer' }}>
    <Link to={`products/${product.slug}`} sx={{ textDecoration: 'none' }}>
      <Box sx={{ position: 'relative' }}>
        <Img sizes={product.image.sizes} />
        <Box
          sx={{
            bg: 'alphaBg',
            color: 'background',
            px: 1,
            fontSize: 1,
            position: 'absolute',
            bottom: 0,
            right: 0,
            textAlign: 'center',
          }}
        >
          {Number(product.price).toLocaleString('it')} €
        </Box>
      </Box>

      <Box mb={4}>
        <h4
          sx={{
            my: 1,
            textAlign: 'center',
            fontSize: 4,
            fontFamily: 'cursive',
            color: 'text',
          }}
        >
          {product.name}
        </h4>
        <span
          sx={{
            bg: 'muted',
            color: 'background',
            py: 1,
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            textAlign: 'center',
            borderRadius: '0 0 4px 4px',
          }}
        >
          Vai al prodotto
        </span>
      </Box>
    </Link>
  </Card>
)
