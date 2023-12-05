import React from "react";
import { VStack, Text, Image, HStack, Button, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const ItemCard = React.memo(({ itemName, price, image, quantity, onIncrement, onDecrement, onRemove, isIncrementDisabled }) => {
  const totalItemPrice = (parseFloat(price) * quantity).toFixed(2);

  return (
    <VStack
      spacing={4}
      align="flex-start"
      justify="flex-start"
      width="100%"
      borderBottom="1px solid #ccc"
      paddingY={4}
    >
      <HStack width="100%" justify="space-between">
        <VStack align="flex-start">
          <Text fontSize="lg" fontWeight="bold">{itemName}</Text>
          <Image src={image} alt={itemName} boxSize="100px" objectFit="cover" />
        </VStack>

        <VStack align="flex-end">
          <Text fontSize="lg" fontWeight="bold">${totalItemPrice}</Text>
          <IconButton
            icon={<FaTrash />}
            aria-label="Remove Item"
            onClick={onRemove}
          />
          <HStack>
            <Button onClick={onDecrement} isDisabled={quantity <= 1}>-</Button>
            <Text fontSize="lg" fontWeight="bold">{quantity}</Text>
            <Button onClick={onIncrement} isDisabled={isIncrementDisabled}>+</Button>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
});

// Export the ItemCard component
export default ItemCard;
