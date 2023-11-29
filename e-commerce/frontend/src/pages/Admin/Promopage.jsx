import {
  Box,
  Text,
  VStack,
  HStack,
  InputGroup,
  InputRightElement,
  Button,
  Input,
  WrapItem,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getAllPromo } from '../../modules/fetch';
import { Link } from 'react-router-dom';

export default function Promopage() {
  const [promo, setPromo] = useState([]);
  useEffect(() => {
    const fetchPromo = async () => {
      const promo = await getAllPromo();
      setPromo(promo);
    };
    fetchPromo();
  });
  const handleClick = () => {};

  return (
    <>
      <Box bg="blue.200" w="full" align="center" height="60px">
        <Text pt="5" fontWeight={'bold'}>
          Promo Management
        </Text>
      </Box>

      <Box align="center" p="20px">
        <VStack spacing={4} align="stretch" p={12}>
          {/* search bar */}
          <Box>
            <HStack w="full">
              <InputGroup size="md">
                <Input pr="100px" placeholder="Promo name" />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}></Button>
                </InputRightElement>
              </InputGroup>
              <Button as={Link} to="create" colorScheme='blue'>
                Add Promo
              </Button>
            </HStack>
          </Box>

          {promo?.promo?.map((promo) => (
            <WrapItem bg="blue.200" w="full" round="lg" key={`${promo.promo_id}`}>
              <Box>
              </Box>
            </WrapItem>
          ))}
        </VStack>
      </Box>
    </>
  );
}
