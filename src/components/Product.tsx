import React, { FC } from 'react'
import Img, { GatsbyImageProps } from 'gatsby-image'
import { Box, Card } from 'theme-ui'

type Product = {
  id: string
  name: string
  price: string
  image: GatsbyImageProps & {
    url: string
  }
}

type Props = {
  product: Product
}
export const Product: FC<Props> = ({ product }) => (
  <Card key={product.id} sx={{ variant: 'primary', cursor: 'pointer' }}>
    <Box
      className="Product snipcart-add-item"
      data-item-id={product.id}
      data-item-price={product.price}
      data-item-image={product.image.url}
      data-item-name={product.name}
      data-item-url={`/`}
    >
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
        <h4 sx={{ textAlign: 'center', fontWeight: 3 }}>{product.name}</h4>

        <Box
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
          Aggiungi al carrello
        </Box>
      </Box>
    </Box>
  </Card>
)
