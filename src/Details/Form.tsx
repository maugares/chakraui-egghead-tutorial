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

const inputFields = [
  { span: 6, label: 'First Name', placeholder: 'John' },
  { span: 6, label: 'Last Name', placeholder: 'Doe' },
  { span: 8, label: 'Address', placeholder: 'Hoofdstraat' },
  { span: 2, label: 'nr.', placeholder: '1' },
  { span: 2, label: 'add.', placeholder: 'HS' },
  { span: 8, label: 'City', placeholder: 'Amsterdam' },
  { span: 4, label: 'Postcode', placeholder: '1234AB' }
]

const Form = () => (
  <SimpleGrid columns={12} columnGap={3} rowGap={6}>
    {inputFields.map(field => (
      <GridItem key={field.label} colSpan={field.span}>
        <FormControl>
          <FormLabel>{field.label}</FormLabel>
          <Input placeholder={field.placeholder} />
        </FormControl>
      </GridItem>
    ))}
    <GridItem colSpan={12}>
      <FormControl>
        <FormLabel>Delivery Mode</FormLabel>
        <Select>
          <option value='personal'>Personal</option>
          <option value='business'>business</option>
        </Select>
      </FormControl>
    </GridItem>
    <GridItem colSpan={12}>
      <Checkbox defaultChecked>Ship to billing address</Checkbox>
    </GridItem>
    <GridItem colSpan={12}>
      <Button size='lg' width='full'>
        Ship to billing address
      </Button>
    </GridItem>
  </SimpleGrid>
)

export default Form
