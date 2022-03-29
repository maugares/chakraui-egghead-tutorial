import { extendTheme } from '@chakra-ui/react'

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
  fonts: {heading: 'Roboto', body: 'Arial'}
})

export default theme
