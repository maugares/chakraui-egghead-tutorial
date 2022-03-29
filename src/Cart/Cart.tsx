import {
  Heading,
  Text,
  VStack,
  Image,
  SimpleGrid,
  GridItem,
  AspectRatio,
  HStack,
  Stack,
  Divider,
  Button,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'

const Cart = () => {
  const { toggleColorMode } = useColorMode()
  const backgroundColor = useColorModeValue('gray.50', 'whiteAlpha.50')
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <VStack
      width='full'
      height='full'
      padding={10}
      spacing={6}
      align='flex-start'
      backgroundColor={backgroundColor}
    >
      <VStack spacing={3} alignItems='flex-start'>
        <Heading size='2xl'>Your cart</Heading>
        <Text color={secondaryTextColor}>
          If the price is too hard on your eyes,{' '}
          <Button onClick={toggleColorMode} variant='link' colorScheme='black'>
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack
        spacing={8}
        alignItems='center'
        width='full'
        justifyContent='space-between'
      >
        <AspectRatio ratio={1} width='96px'>
          <Image src='/images/skateboard.jpg' alt='Skateboard' />
        </AspectRatio>
        <VStack width='full' spacing={0} alignItems='flex-start'>
          <Heading size='md'>Penny board</Heading>
          <Text color={secondaryTextColor}>PNYCOMP27541</Text>
        </VStack>
        <Heading size='sm' textAlign='end'>
          $119.00
        </Heading>
      </HStack>
      <VStack spacing={4} alignItems='stretch' width='full'>
        <HStack justifyContent='space-between'>
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size='sm'>$119.00</Heading>
        </HStack>
        <HStack justifyContent='space-between'>
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size='sm'>$19.99</Heading>
        </HStack>
        <HStack justifyContent='space-between'>
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size='sm'>$23.80</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent='space-between' width='full'>
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size='lg'>$162.79</Heading>
      </HStack>
    </VStack>
  )
}

export default Cart
