export default {
  breakpoints: ['40em', '56em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
    cursive: "'Amatic SC', cursive",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  zIndices: [0, 1, 2, 3, 5, 8, 13],
  colors: {
    text: '#333',
    alphaBg: 'rgba(64,83,27, 0.7)',
    background: '#fff',
    primary: '#669253',
    secondary: '#d7f9f1',
    muted: '#7aa095',
    dark: '#40531b',
    light: '#afbc88',
  },
  layout: {
    header: {
      color: 'white',
      backgroundColor: 'primary',
      position: 'relative',
      mb: 3,
    },
    footer: {
      color: 'white',
      backgroundColor: 'black',
    },
    cartmobile: {
      position: 'fixed',
      bg: 'alphaBg',
      color: 'background',
      top: 0,
      right: 0,
      p: 2,
      zIndex: 3,
    },
    cartdesktop: {
      position: 'absolute',
      bg: 'transparent',
      top: 3,
      right: 3,
    },
  },
  cards: {
    primary: {
      position: 'relative',
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'cursive',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
}
