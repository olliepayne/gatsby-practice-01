import { Theme } from 'theme-ui'

export const theme: Theme = {
  breakpoints: [
    '768px', '1024px', '1280px'
  ],
  space: [
    '0.5em', '1em', '1.5em', '2em'
  ],
  colors: {
    themeBlack: '#0a0a0a',
    themePink: '#ff708f'
  },
  fonts: {
    main: 'Nunito'
  },
  fontSizes: [
    '0.8rem', '1rem', '1.75rem', '2.25rem', '2.5rem'
  ],
  fontWeights: {
    bold: 700,
    body: 400
  },
  text: {
    heading: {
      fontFamily: 'main',
      fontWeight: 'bold',
      color: 'themeBlack'
    },
    body: {
      fontFamily: 'main',
      fontWeight: 'body'
    }
  },
  links: {
    nav: {
      py: 0,
      px: 1,
      fontFamily: 'main',
      fontWeight: 'body',
      color: 'themeBlack',
      textDecoration: 'none',
      transition: 'background-color 0.3s',
      '&:hover': {
        bg: 'rgba(255, 112, 143, 0.05)'
      }
    }
  },
  styles: {
    'root': {
      p: '0px',
      m: '0px'
    },
    h1: {
      variant: 'text.heading',
      fontSize: [3, null, 4],
    }
  }
}

export default theme