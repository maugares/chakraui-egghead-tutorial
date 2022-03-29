import { Container, Flex, VStack } from '@chakra-ui/react'
import Cart from '../src/Cart/Cart'
import Details from '../src/Details/Details'

// For explanation on style props see README.md
// padding made responsive by passing an array with different padding values for the different widht breakpoints: [<479, 480-767, >768]

const IndexPage = () => (
  <Container maxWidth='container.xl' padding={0}>
    <Flex height='100vh' paddingY={[0, 10, 20]}>
      <Details />
      <Cart />
    </Flex>
  </Container>
)

export default IndexPage
