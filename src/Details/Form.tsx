import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  Select,
  SimpleGrid
} from '@chakra-ui/react'

const Form = () => {
  return (
    <SimpleGrid columns={2} columnGap={3} rowGap={6} w='full'>
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
      <GridItem colSpan={12}>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input placeholder='Blvd. Broken Dreams 21' />
        </FormControl>
      </GridItem>
      <GridItem colSpan={6}>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input placeholder='San Francisco' />
        </FormControl>
      </GridItem>
      <GridItem colSpan={6}>
        <FormControl>
          <FormLabel>Country</FormLabel>
          <Select>
            <option value='usa'>United States of America</option>
            <option value='uae'>United Arab Emirates</option>
            <option value='nmk'>North Macedonia</option>
            <option value='de'>Germany</option>
          </Select>
        </FormControl>
      </GridItem>
      <GridItem colSpan={12}>
        <Checkbox defaultChecked>Ship to billing address.</Checkbox>
      </GridItem>
      <GridItem colSpan={12}>
        <Button size='lg' width='full'>
          Place order
        </Button>
      </GridItem>
    </SimpleGrid>
  )
}

export default Form
