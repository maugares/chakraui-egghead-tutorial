import { extendTheme, theme as base } from '@chakra-ui/react'

// extendTheme options: {
//   breakpoints: '',
//   zIndices: '',
//   radii: '',
//   colors: '',
//   letterSpacings: '',
//   lineHeights: '',
//   fontWeights: '',
//   fonts: '',
//   fontSizes: '',
//   sizes: '',
//   shadows: '',
//   space: '',
//   borders: '',
//   transition: ''
// }

const theme = extendTheme({
  fonts: {
    heading: `Roboto, ${base.fonts?.heading}`,
    body: `Arial, ${base.fonts?.heading}`
  }
})

export default theme
