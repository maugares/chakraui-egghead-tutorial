import {
  FormControl,
  FormLabel,
  GridItem,
  Input,
  SimpleGrid
} from '@chakra-ui/react'

const Form = () => (
  <SimpleGrid columns={12} columnGap={3} rowGap={6}>
    <GridItem colSpan={6}>
      <FormControl>
        <FormLabel>First Name</FormLabel>
        <Input placeholder='John' />
      </FormControl>
    </GridItem>
    <GridItem colSpan={6}>
      <FormControl>
        <FormLabel>Last Name</FormLabel>
        <Input placeholder='Doe' />
      </FormControl>
    </GridItem>
    <GridItem colSpan={8}>
      <FormControl>
        <FormLabel>Address</FormLabel>
        <Input placeholder='Hoofdstraat 1' />
      </FormControl>
    </GridItem>
    <GridItem colSpan={2}>
      <FormControl>
        <FormLabel>nr.</FormLabel>
        <Input placeholder='1' />
      </FormControl>
    </GridItem>
    <GridItem colSpan={2}>
      <FormControl>
        <FormLabel>add.</FormLabel>
        <Input placeholder='HS' />
      </FormControl>
    </GridItem>
    <GridItem colSpan={8}>
      <FormControl>
        <FormLabel>City</FormLabel>
        <Input placeholder='Amsterdam' />
      </FormControl>
    </GridItem>
    <GridItem colSpan={4}>
      <FormControl>
        <FormLabel>Postcode</FormLabel>
        <Input placeholder='1234AB' />
      </FormControl>
    </GridItem>
  </SimpleGrid>
)

export default Form
