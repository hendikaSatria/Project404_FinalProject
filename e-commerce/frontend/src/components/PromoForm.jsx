import {
  Button,
  Heading,
  FormControl,
  FormLabel,
  VStack,
  useToast,
  Select,
  Box,
  HStack,
  Input,
  Text,
  Link,
} from "@chakra-ui/react";
import { createPromo, getAllPromo } from "../modules/fetch";
import { ArrowBackIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";

export default function PromoForm() {
  const toast = useToast();
  const [types, setTypes] = useState("");
  const [amounts, setAmounts] = useState("");
  const [usages, setUsages] = useState("");
  const [codes, setCodes] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPromoDetails = async () => {
      try {
        const response = await getAllPromo;
        const promoDetails = response.data;

        setTypes(promoDetails.type);
        setAmounts(promoDetails.amount);
        setUsages(promoDetails.maximum_usage);
        setCodes(promoDetails.promo_code);
      } catch (error) {
        console.error("Error fetching promo details:", error);
        setError("Error fetching promo details");
      }
    };

    fetchPromoDetails();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        type: types,
        amount: amounts,
        maximum_usage: usages,
        promo_code: codes,
      };

      await createPromo(data);
      toast({
        title: "Success",
        description: "Promo created successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      setError(`Error creating promotion: ${error.message}`);
      console.error("Error creating promotion:", error);
      toast({
        title: "Error",
        description: error.response?.data.message || "Something went wrong",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Box bg="blue.200" w="full" align="center" height="60px">
        <Text fontWeight="bold" fontSize={"xx-large"}>
          Promotion Form
        </Text>
      </Box>

      <form onSubmit={handleSubmit}>
        <Box p="30px">
          <Button
            as={Link}
            href="/admin/promo"
            width="50px"
            h="50px"
            ml="10px"
            rounded="20px"
            bg="white"
            align="center"
            _hover={{
              transform: "scale(1.2)",
              transitionDuration: "0.3",
              rounded: "full",
              transitionTimingFunction: "ease-in-out",
              bg: "gray.200",
            }}>
            <ArrowBackIcon />
            {""}
          </Button>
          <VStack spacing="4" w="full">
            <Heading size="lg" mb="30px">
              Add Promo
            </Heading>
            <Box w="500px" align="center" bg="gray.200" p="20px" rounded="20px">
              <FormControl>
                <Box w="400px" p="10px">
                  <HStack>
                    <FormLabel w="80px"> Type : </FormLabel>
                    <Select
                      bg="white"
                      variant="filled"
                      placeholder="Promo Type"
                      name="type"
                      isRequired
                      value={types}
                      onChange={(e) => setTypes(e.target.value)}>
                      <option value="Percentage">Percentage</option>
                      <option value="Fixed">Fixed</option>
                    </Select>
                  </HStack>
                </Box>
              </FormControl>
              <FormControl>
                <Box p="10px">
                  <HStack>
                    <FormLabel w="100px"> Amount : </FormLabel>
                    <Input
                      bg="white"
                      type="number"
                      required
                      value={amounts}
                      onChange={(e) => setAmounts(e.target.value)}
                    />
                  </HStack>
                </Box>
              </FormControl>
              <FormControl>
                <Box p="10px">
                  <HStack>
                    <FormLabel w="100px"> Usage : </FormLabel>
                    <Input
                      bg="white"
                      type="number"
                      required
                      value={usages}
                      onChange={(e) => setUsages(e.target.value)}
                    />
                  </HStack>
                </Box>
              </FormControl>
              <FormControl>
                <Box p="10px">
                  <HStack>
                    <FormLabel w="100px"> Code : </FormLabel>
                    <Input
                      bg="white"
                      type="text"
                      required
                      value={codes}
                      onChange={(e) => setCodes(e.target.value)}
                    />
                  </HStack>
                </Box>
              </FormControl>
              <Button type="submit" bg="white">
                {" "}
                Create Promo{" "}
              </Button>
            </Box>
          </VStack>
        </Box>
      </form>
    </>
  );
}
