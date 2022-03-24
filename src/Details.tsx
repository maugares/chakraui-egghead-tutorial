import { Heading, VStack } from '@chakra-ui/react'

const Details = () => (
  <VStack
    width='full'
    height='full'
    padding={10}
    spacing={10}
    alignItems='flex-start'
    background='pink'
  >
    <Heading size='2xl'>
      Your Details
    </Heading>
  </VStack>
)

export default Details
