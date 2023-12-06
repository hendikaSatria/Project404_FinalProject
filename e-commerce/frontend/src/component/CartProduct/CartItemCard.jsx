import React from "react";
import {
  VStack,
  Text,
  Image,
  HStack,
  Button,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const ItemCard = React.memo(
  ({
    itemName,
    price,
    image,
    quantity,
    onIncrement,
    onDecrement,
    onRemove,
    isIncrementDisabled,
  }) => {
    const totalItemPrice = (parseFloat(price) * quantity).toFixed(2);

    return (
      <Box borderBottom="1px solid #ccc" paddingY={4} w={"55vw"}>
        <HStack width="55vw" justify="space-between">
          <HStack align="start">
            <Image
              src={image}
              alt={itemName}
              boxSize="100px"
              objectFit="cover"
            />
            <Text fontSize="lg" fontWeight="bold">
              {itemName}
            </Text>
          </HStack>

          <VStack align="flex-end">
            <Text fontSize="lg" fontWeight="bold">
              ${totalItemPrice}
            </Text>
            <HStack>
              <IconButton
                bg={"red.400"}
                icon={<FaTrash />}
                aria-label="Remove Item"
                onClick={onRemove}
              />
              <HStack>
                <Button onClick={onDecrement} isDisabled={quantity <= 1}>
                  -
                </Button>
                <Text fontSize="lg" fontWeight="bold">
                  {quantity}
                </Text>
                <Button onClick={onIncrement} isDisabled={isIncrementDisabled}>
                  +
                </Button>
              </HStack>
            </HStack>
          </VStack>
        </HStack>
      </Box>
    );
  }
);

// Export the ItemCard component
export default ItemCard;
