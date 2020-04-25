/** @jsx jsx */
import { FC } from 'react'
import logo from '../images/logo.png'
import { Box, jsx } from 'theme-ui'

export const Logo: FC = () => (
  <Box
    sx={{
      width: 500,
    }}
  >
    <img src={logo} alt="Officina Dedalo" sx={{ maxWidth: '100%' }} />
  </Box>
)
