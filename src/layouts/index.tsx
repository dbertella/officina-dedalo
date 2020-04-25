/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { Logo } from '../components/Logo'
import { Cart } from '../components/Cart'

type Props = {
  site: {
    siteMetadata: {
      siteName: string
      description: string
    }
  }
}

const Layout: FC<Props> = ({ children, site }) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      variant: 'layout.root',
    }}
  >
    <Helmet title={site.siteMetadata.siteName}>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
    <header
      sx={{
        width: '100%',
        variant: 'layout.header',
      }}
    >
      <Cart />
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: 1200,
          margin: 'auto',
        }}
      >
        <h1>
          <Link data-text={site.siteMetadata.siteName} to="/">
            <Logo />
          </Link>
        </h1>
      </div>
    </header>
    <main
      sx={{
        width: '100%',
        flex: '1 1 auto',
        variant: 'layout.main',
      }}
    >
      <div
        sx={{
          maxWidth: 768,
          mx: 'auto',
          px: 3,
          variant: 'layout.container',
        }}
      >
        {children}
      </div>
    </main>
    <footer
      sx={{
        width: '100%',
        variant: 'layout.footer',
      }}
    >
      Footer content
    </footer>
  </div>
)

export default Layout
