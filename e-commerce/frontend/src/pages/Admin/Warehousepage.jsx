import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  VStack,
  Button,
  WrapItem,
  Input,
  InputGroup,
  InputRightElement,
  HStack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { getAllWarehouses, deleteWarehouse } from "../../modules/fetch";

export default function WarehousePage() {
  const [warehouses, setWarehouses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedWarehouseId, setSelectedWarehouseId] = useState(null);
  const [selectedWarehouseName, setSelectedWarehouseName] = useState(null);
  const cancelRef = React.useRef(); // Tambahkan useRef

  const fetchWarehouses = async () => {
    const response = await getAllWarehouses();
    setWarehouses(response);
  };

  useEffect(() => {
    fetchWarehouses();
  }, [searchTerm, warehouses]);

  const handleSearch = () => {
    const filteredWarehouses = warehouses.filter((warehouse) =>
      warehouse.warehouse_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setWarehouses(filteredWarehouses);
  };

  const handleDelete = async () => {
    try {
      await deleteWarehouse(selectedWarehouseId);
      // console.log(warehouses.warehouses);
      const updatedWarehouses = warehouses.warehouses.filter(
        (warehouse) => warehouse.warehouse_id !== selectedWarehouseId
      );
      // console.log(updatedWarehouses);
      setWarehouses(updatedWarehouses);

      // console.log(warehouses);

      console.log("Gudang berhasil dihapus!");
    } catch (error) {
      console.error("Error menghapus gudang:", error.message);
    } finally {
      onClose();
    }
  };

  const handleOpenDeleteDialog = (warehouseId) => {
    setSelectedWarehouseId(warehouseId);
    onOpen();
  };

  return (
    <>
      <Box bg="blue.200" w="full" align="center" height="60px">
        <Text fontWeight="bold" fontSize={"xx-large"}>
          Warehouse
        </Text>
      </Box>

      <Box align="center" p="20px">
        <VStack spacing={4} align="stretch" p={12}>
          {/* search bar */}
          <Box>
            <HStack w="full">
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  placeholder="Warehouse Name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleSearch}>
                    Search
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button as={Link} to="create" colorScheme="blue">
                Add Warehouse
              </Button>
            </HStack>
          </Box>
          {/* end of search bar */}

          <VStack overflowY="auto" h="70vh" bg="gray.200" p={4}>
            {warehouses?.warehouses?.map((warehouse) => (
              <WrapItem
                bg="blue.200"
                w="full"
                rounded="lg"
                key={`${warehouse.warehouse_id} `}
              >
                <Box w="80%" rounded="lg">
                  <HStack p={6} w={"100%"}>
                    <Text
                      w={"100%"}
                      fontSize={"xl"}
                      as={"b"}
                    >{`${warehouse.warehouse_name}`}</Text>
                    <VStack w={"100%"}>
                      <Text>{`${warehouse.province_name}`}</Text>
                      <Text>{`${warehouse.city_name}`}</Text>
                    </VStack>
                  </HStack>
                </Box>
                <Box p={2}>
                  <VStack spacing={2}>
                    <Button
                      w="full"
                      colorScheme="yellow"
                      as={Link}
                      to={`/admin/warehouse/${warehouse.warehouse_id}`}
                    >
                      Edit
                    </Button>
                    <Button
                      w="full"
                      colorScheme="red"
                      onClick={() => {
                        handleOpenDeleteDialog(warehouse.warehouse_id);
                        setSelectedWarehouseName(warehouse.warehouse_name);
                      }}
                      key={warehouse.warehouse_id}
                    >
                      Delete
                    </Button>
                  </VStack>
                </Box>
              </WrapItem>
            ))}
          </VStack>
        </VStack>
      </Box>

      {/* alert delete */}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Warehouse : {selectedWarehouseName}
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
