import { Container } from '@chakra-ui/react'

/*
- Components have default parameters and are overriten with Style props.
- Chakra UI has its own implemented design system and every design system has designed tokens, which are colors, spacing units, fonts, sizes, etc. 
- We can use style props to access those design tokens that are part of Chakra UI.
- Under the hood, these style props are compiled to CSS properties. 
- These style props are well documented and can be checked out on the Chakra UI website: https://chakra-ui.com/docs/styled-system/theming/theme
*/

const IndexPage = () => (
  <Container maxWidth="container.xl" padding={0}>
  </Container>
)

export default IndexPage
