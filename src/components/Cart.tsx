/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { FaShoppingCart } from 'react-icons/fa'

export const Cart = () => (
  <div
    className="snipcart-summary snipcart-checkout"
    sx={{
      variant: ['layout.cartmobile', null, 'layout.cartdesktop'],
    }}
  >
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        sx={{
          position: 'relative',
          textAlign: 'center',
          lineHeight: 1,
        }}
      >
        <span
          className="snipcart-total-items"
          sx={{
            position: 'absolute',
            top: '5px',
            left: 0,
            right: 0,
            fontSize: '10px',
            fontWeight: 2,
            color: 'primary',
            pl: 1,
          }}
        />
        <FaShoppingCart sx={{ fontSize: 4 }} />
      </div>
      <Box ml={1}>Carrello</Box>
      {/* <span className="snipcart-total-price"></span> */}
    </div>
  </div>
)
