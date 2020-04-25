/** @jsx jsx */
import { jsx } from 'theme-ui'

export const Cart = () => (
  <div
    className="snipcart-summary snipcart-checkout"
    sx={{
      variant: ['layout.cartmobile', null, 'layout.cartdesktop'],
    }}
  >
    <div>
      <h4 sx={{ mt: -1, mb: 1, textAlign: 'center' }}>🌵 Carrello 🌵</h4>
      <div>
        Numero di elementi: <span className="snipcart-total-items"></span>
      </div>
      <div>
        Prezzo totale: <span className="snipcart-total-price"></span>
      </div>
    </div>
  </div>
)
