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
  Divider
} from '@chakra-ui/react'

const Cart = () => (
  <VStack
    width='full'
    height='full'
    padding={10}
    spacing={6}
    align='flex-start'
  >
    <VStack spacing={3} alignItems='flex-start'>
      <Heading size='2xl'>Your cart</Heading>
      <Text>If price is too hard on your eyes, try changing the theme</Text>
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
        <Text>PNYCOMP27541</Text>
      </VStack>
      <Heading size='sm' textAlign='end'>
        $119.00
      </Heading>
    </HStack>
    <VStack spacing={4} alignItems='stretch' width='full'>
      <HStack justifyContent='space-between'>
        <Text>Subtotal</Text>
        <Heading size='sm'>$119.00</Heading>
      </HStack>
      <HStack justifyContent='space-between'>
        <Text>Shipping</Text>
        <Heading size='sm'>$19.99</Heading>
      </HStack>
      <HStack justifyContent='space-between'>
        <Text>Taxes (estimated)</Text>
        <Heading size='sm'>$23.80</Heading>
      </HStack>
    </VStack>
    <Divider />
    <HStack justifyContent='space-between' width='full'>
      <Text>Total</Text>
      <Heading size='lg'>$162.79</Heading>
    </HStack>
  </VStack>
)

export default Cart
