import { Heading, Text, VStack } from '@chakra-ui/react'

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
    <Text>
      If you already have an account, click here to log in
    </Text>
  </VStack>
)

export default Details
