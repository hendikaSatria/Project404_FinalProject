import {
  Box,
  Text,
  VStack,
  Button,
  WrapItem,
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useToast,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import {
  getAllCategories,
  createCategory,
  editCategory,
  deleteCategory,
} from "../../modules/fetch";

const Categorypage = () => {
  const [categories, setCategories] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryData, setCategoryData] = useState(null);
  const [deleteCategoryId, setDeleteCategoryId] = useState(null);
  const [deleteCategoryName, setDeleteCategoryName] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isAlertOpen,
    onOpen: onAlertOpen,
    onClose: onAlertClose,
  } = useDisclosure();
  const [modalHeader, setModalHeader] = useState("Add Category");
  const [modalButtonLabel, setModalButtonLabel] = useState("Create");
  const OverlayOne = () => <ModalOverlay backdropFilter="blur(10px) " />;
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const cancelRef = React.useRef();
  const toast = useToast();

  const fetchCategories = async () => {
    try {
      const response = await getAllCategories();
      setCategories(response.categorys);
      // console.log(response.categorys);
    } catch (error) {
      console.error("Gagal mengambil data kategori:", error.message);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, [searchTerm]);

  const handleSearch = () => {
    // Check if categories is an array
    if (Array.isArray(categories)) {
      // Gunakan filter untuk mencocokkan gudang berdasarkan nama
      const filteredCategories = categories.filter((category) =>
        category.category_name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Update state dengan daftar gudang yang sesuai
      setCategories(filteredCategories);
    }
  };

  const handleSubmit = async () => {
    try {
      if (modalHeader === "Add Category") {
        try {
          // Logika untuk menambah kategori baru
          const data = {
            category_name: categoryData.category_name,
          };
          await createCategory(data);
          toast({
            title: "Sukses",
            description: "Category berhasil ditambahkan!",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } catch (error) {
          console.error("error:", error.message);
          toast({
            title: "Error",
            description: "Terjadi kesalahan saat menambahkan category.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      } else if (modalHeader === "Edit Category") {
        try {
          // Logika untuk mengedit kategori
          await editCategory(
            categoryData.category_id,
            categoryData.category_name
          );
          toast({
            title: "Sukses",
            description: "Category berhasil diupdate!",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } catch (error) {
          console.error("error:", error.message);
          toast({
            title: "Error",
            description: "Terjadi kesalahan saat mengedit category.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      }

      await fetchCategories();
      onClose();
    } catch (error) {
      console.error("error:", error.message);
      toast({
        title: "Error",
        description: "Terjadi kesalahan !!!.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      await fetchCategories();
      toast({
        title: "Sukses",
        description: `${deleteCategoryName} berhasil dihapus!`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("error:", error.message);
      toast({
        title: "Error",
        description: `Terjadi kesalaha saat mengkapus category ${deleteCategoryName}!`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleOpenDeleteDialog = (categoryId) => {
    setDeleteCategoryId(categoryId);
    onAlertOpen();
  };

  return (
    <>
      <Box bg="blue.200" w="full" align="center" height="60px">
        <Text fontWeight="bold" fontSize={"xx-large"}>
          Category
        </Text>
      </Box>

      <Box align="center" p="20px">
        <VStack spacing={4} align="stretch" p={12}>
          {/* Search bar */}
          <Box>
            <HStack w="full">
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  placeholder="Category Name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleSearch}>
                    Search
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button
                colorScheme="blue"
                onClick={() => {
                  setModalHeader("Add Category");
                  setModalButtonLabel("Create");
                  setCategoryData(null);
                  setOverlay(<OverlayOne />);
                  onOpen();
                }}
              >
                Add Category
              </Button>
            </HStack>
          </Box>
          {/* End of search bar */}

          <VStack overflowY="auto" h="70vh" bg="gray.200" p={4}>
            {categories?.map((category) => (
              <WrapItem
                bg="blue.200"
                w="full"
                rounded="lg"
                key={`${category.category_id}`}
                p={4}
              >
                <HStack justify={"space-between"} w={"full"}>
                  <Box w="80%" rounded="lg">
                    <Text
                      as={"b"}
                      fontSize={"xx-large"}
                    >{`${category.category_name}`}</Text>
                  </Box>
                  <HStack>
                    <Button
                      w="full"
                      colorScheme="yellow"
                      onClick={() => {
                        setModalHeader("Edit Category");
                        setModalButtonLabel("Update"); // Ubah teks header modal
                        setOverlay(<OverlayOne />);
                        setCategoryData(category); // Set data kategori yang akan diedit
                        onOpen();
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      w="full"
                      colorScheme="red"
                      onClick={() => {
                        handleOpenDeleteDialog(category.category_id);
                        setDeleteCategoryName(category.category_name);
                      }}
                      // key={category.category_id}
                    >
                      Delete
                    </Button>
                  </HStack>
                </HStack>
              </WrapItem>
            ))}
          </VStack>
        </VStack>
      </Box>

      {/* alert delete */}
      <AlertDialog
        isOpen={isAlertOpen}
        leastDestructiveRef={cancelRef}
        onClose={onAlertClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Category : {deleteCategoryName}
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onAlertClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  handleDelete(deleteCategoryId);
                  onAlertClose();
                }}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      {/* Modal */}

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>
            <Text as="b" fontSize="x-large">
              {modalHeader}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Text as="b" fontSize="large">
                Category Name
              </Text>
              <Input
                placeholder="Category Name"
                size="lg"
                value={categoryData?.category_name || ""}
                onChange={(e) => {
                  setCategoryData((prevData) => ({
                    ...prevData,
                    category_name: e.target.value,
                  }));
                }}
              />
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleSubmit}>{modalButtonLabel}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Categorypage;
