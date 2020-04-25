import React, { FC } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { Box, Flex } from 'theme-ui'
import Img from 'gatsby-image'

import './reset.css'
import { Logo } from './Logo'

type Props = {
  site: {
    siteMetadata: {
      siteName: string
      description: string
    }
  }
}

const Layout: FC<Props> = ({ children, site }) => (
  <Box>
    <Helmet
      title={site.siteMetadata.siteName}
      description={site.siteMetadata.description}
    />
    <Box
      sx={{
        maxWidth: 1200,
        margin: 'auto',
      }}
    >
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h1>
          <Link data-text={site.siteMetadata.siteName} to="/">
            <Logo />
          </Link>
        </h1>
        <Box className="snipcart-summary snipcart-checkout">
          <Box>🌵 Carrello 🌵</Box>
          <Box>
            Number of items: <span className="snipcart-total-items"></span>
          </Box>
          <Box>
            Total price: <span className="snipcart-total-price"></span>
          </Box>
        </Box>
      </Flex>
      <Box>{children}</Box>
    </Box>
  </Box>
)

export default Layout
