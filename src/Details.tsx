import { Heading, Text, VStack } from '@chakra-ui/react'
import Form from './Form'

const Details = () => (
  <VStack
    width='full'
    height='full'
    padding={10}
    spacing={10}
    alignItems='flex-start'
  >
    <VStack spacing={3} alignItems='flex-start'>
      <Heading size='2xl'>
        Your Details
      </Heading>
      <Text>
        If you already have an account, click here to log in
      </Text>
      <Form />
    </VStack>
  </VStack>
)

export default Details
