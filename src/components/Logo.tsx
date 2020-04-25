/** @jsx jsx */
import { FC } from 'react'
import logo from '../images/logo.png'
import { jsx } from 'theme-ui'

export const Logo: FC = () => (
  <div
    sx={{
      width: 500,
      lineHeight: 1,
    }}
  >
    <img src={logo} alt="Officina Dedalo" sx={{ maxWidth: '100%' }} />
  </div>
)
