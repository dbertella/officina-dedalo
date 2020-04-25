/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'
import Link from 'gatsby-link'
import { Logo } from './Logo'

const Layout: FC = ({ children }) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      variant: 'layout.root',
    }}
  >
    <header
      sx={{
        variant: 'layout.header',
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
        <Link data-text="🌵Officina Il Dedalo" to="/">
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
