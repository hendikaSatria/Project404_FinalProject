import {
  Heading,
  FormControl,
  FormLabel,
  VStack,
  useToast,
  Select,
  Box,
  HStack,
  Input,
} from '@chakra-ui/react';
import { createPromo } from '../modules/fetch';

export default function Promopage(promoData) {
  const toast = useToast();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    try {
      await createPromo(formData);
      toast({
        title: 'Success',
        description: 'Promo created successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error.response.data.message || 'Something went wrong',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box align="center" p="30px">
        <VStack spacing="4" w="full">
          <Heading size="lg" mb="30px">
            Add Promo
          </Heading>
          <Box w="500px">
            <FormControl>
              <Box w="400px" p="10px">
                <HStack>
                  <FormLabel w="80px"> Type : </FormLabel>
                  <Select varriant="filled" placeholder="Promo Type" isRequired>
                    <option value="option1"> Percentage </option>
                    <option value="option2"> Fixed </option>
                  </Select>
                </HStack>
              </Box>
            </FormControl>
            <FormControl>
              <Box p="10px">
                <HStack>
                  <FormLabel w="100px"> Amount : </FormLabel>
                  <Input name="amount" required defaultValue={promoData?.amount} />
                </HStack>
              </Box>
            </FormControl>
            <FormControl>
              <Box p="10px">
                <HStack>
                  <FormLabel w="100px"> Usage : </FormLabel>
                  <Input name="usage" required defaultValue={promoData?.maximum_usage} />
                </HStack>
              </Box>
            </FormControl>
          </Box>
        </VStack>
      </Box>
    </form>
  );
}
