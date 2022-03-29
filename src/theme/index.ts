import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant
} from '@chakra-ui/react'

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

// withDefaultColorScheme method allows to set a custom color scheme to all the instances of a certain components

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: '#f5fee5',
        100: '#e1fbb2',
        200: '#cdf781',
        300: '#b8ee56',
        400: '#a2e032',
        500: '#8ac919',
        600: '#71ab09',
        700: '#578602',
        800: '#3c5e00',
        900: '#203300'
      }
    },
    fonts: {
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`
    }
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Checkbox']
  }),
  withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'Select']
  })
)

export default theme
