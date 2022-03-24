import { Container, Flex, VStack } from '@chakra-ui/react'
import Cart from '../src/Cart'
import Details from '../src/Details'

// For explanation on style props see README.md

const IndexPage = () => (
  <Container maxWidth='container.xl' padding={0}>
    <Flex height='100vh' paddingY={20}>
      <Details />
      <Cart />
    </Flex>
  </Container>
)

export default IndexPage
