import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  Select,
  SimpleGrid,
  useBreakpointValue
} from '@chakra-ui/react'

const Form = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 })

  return (
    <SimpleGrid columns={2} columnGap={3} rowGap={6} w='full'>
      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input placeholder='John' />
        </FormControl>
      </GridItem>
      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input placeholder='Doe' />
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input placeholder='Blvd. Broken Dreams 21' />
        </FormControl>
      </GridItem>
      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input placeholder='San Francisco' />
        </FormControl>
      </GridItem>
      <GridItem colSpan={colSpan}>
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
      <GridItem colSpan={2}>
        <Checkbox defaultChecked>Ship to billing address.</Checkbox>
      </GridItem>
      <GridItem colSpan={2}>
        <Button size='lg' width='full' variant='primary'>
          Place order
        </Button>
      </GridItem>
    </SimpleGrid>
  )
}

export default Form
