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
          p: 3,
        }}
      >
        <Link data-text={site.siteMetadata.siteName} to="/">
          <Logo />
        </Link>
      </div>
    </header>
    <main
      sx={{
        width: '100%',
        flex: '1 1 auto',
        mb: 4,
        variant: 'layout.main',
      }}
    >
      <div
        sx={{
          maxWidth: 1200,
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
        mb: [4, 0],
        variant: 'layout.footer',
      }}
    >
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: 1200,
          margin: 'auto',
          p: 3,
        }}
      >
        © {new Date().getFullYear()}, nicola bruni
      </div>
    </footer>
  </div>
)

export default Layout
