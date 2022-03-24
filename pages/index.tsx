import { Container, Flex } from '@chakra-ui/react'

/*
- Components have default parameters and are overriten with Style props.
- Chakra UI has its own implemented design system and every design system has designed tokens, which are colors, spacing units, fonts, sizes, etc. 
- style props can access design tokens
- Under the hood, these style props are compiled to CSS properties. 
- These style props can be checked out on the Chakra UI website: https://chakra-ui.com/docs/styled-system/theming/theme or
./node_modules/@chakra-ui/styled-system/src/config/space.ts
- design tokens have long and short forms: width (w), height (h), padding (p), margin (m), etc
*/

const IndexPage = () => (
    <Container maxWidth="container.xl" padding={0}>
        <Flex height="100vh" paddingY={20}>
        </Flex>      
    </Container>
)

export default IndexPage
