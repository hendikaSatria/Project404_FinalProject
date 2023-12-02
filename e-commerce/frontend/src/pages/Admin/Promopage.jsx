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
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { getAllPromo } from "../../modules/fetch";
import { Link } from "react-router-dom";

export default function Promopage() {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    const fetchpromotions = async () => {
      const promotions = await getAllPromo();
      setPromotions(promotions);
    };

    fetchpromotions();
  }, []);

  const handleClick = () => {};

  return (
    <>
      <Box bg="blue.200" w="full" align="center" height="60px">
        <Text fontSize={"xx-large"} fontWeight={"bold"}>
          Promo Management
        </Text>
      </Box>
      <VStack spacing={4} align="stretch" p={12}>

        {/* search bar */}
        <Box align="center">
          <HStack w="750px">
            <InputGroup size="md">
              <Input pr="100px" placeholder="Search Promo" />
              <InputRightElement>
                <Button size="sm" onClick={handleClick} bg={"transparent"}>
                  <SearchIcon />{" "}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button as={Link} to="create" colorScheme="blue">
              Add Promo
            </Button>
          </HStack>
        </Box>

        <Box align="center">
          {promotions?.map((promotion) => (
            <WrapItem
              h="150px"
              w="750px"
              bg="blue.100"
              rounded={"20px"}
              mt="10px"
              key={`${promotion.promo_id}`}>
              <Grid w="full" templateColumns="repeat(3,1fr)" templateRows="repeat(1,1fr)">
                <GridItem>
                  <Box
                    w="80%"
                    p="20px"
                    bg="white"
                    rounded="lg"
                    mt="40px"
                    align="center">{`${promotion.type}`}</Box>
                </GridItem>
                <GridItem>
                  <Box align="left" p="3px" mt="10px" bg="blue.200" rounded="10px">
                    <Text ml="8px"> Type: {`${promotion.type}`}</Text>
                    <Text ml="8px"> Amount: {`${promotion.amount}`}</Text>
                    <Text ml="8px"> MaxUsage: {`${promotion.maximum_usage}`}</Text>
                    <Text ml="8px"> Usage: {`${promotion.remaining_usage}`}</Text>
                    <Text ml="8px"> Code: {`${promotion.promo_code}`}</Text>
                  </Box>
                </GridItem>
                <GridItem>
                  <VStack mt="25px">
                    <Button w="80%"> Manage </Button>
                    <Button w="80%"> Delete </Button>
                  </VStack>
                </GridItem>
              </Grid>
            </WrapItem>
          ))}
        </Box>
      </VStack>
    </>
  );
}
