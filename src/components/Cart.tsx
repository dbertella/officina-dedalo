/** @jsx jsx */
import { jsx } from 'theme-ui'

export const Cart = () => (
  <div
    className="snipcart-summary snipcart-checkout"
    sx={{
      bg: 'alphaBg',
      color: 'background',
      py: 2,
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: 3,
      transform: 'translateY(62px)',
    }}
  >
    <div>
      <h4 sx={{ mt: -1, mb: 1 }}>🌵 Carrello 🌵</h4>
      <div>
        Number of items: <span className="snipcart-total-items"></span>
      </div>
      <div>
        Total price: <span className="snipcart-total-price"></span>
      </div>
    </div>
  </div>
)
