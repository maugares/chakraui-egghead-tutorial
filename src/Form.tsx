import { FormControl, FormLabel, GridItem, Input, SimpleGrid } from '@chakra-ui/react'

const Form = () => (
  <SimpleGrid columns={2} columnGap={3} rowGap={6}>
    <GridItem colSpan={1}>
      <FormControl>
        <FormLabel>First Name</FormLabel>
        <Input placeholder="John"/>
      </FormControl>
    </GridItem>
  </SimpleGrid>
)

export default Form
