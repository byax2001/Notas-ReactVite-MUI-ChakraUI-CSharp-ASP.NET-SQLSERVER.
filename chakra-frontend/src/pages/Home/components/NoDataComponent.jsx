import { HStack, Text, Icon, Box } from "@chakra-ui/react";
import { FaDatabase } from "react-icons/fa";

export const NoDataComponent = () => {
  return (
    <HStack
      spacing={4}
      //bg="gray.700"
      p={4}
      //borderRadius="md"
      //shadow="md"
      align="center"
      justify="center"
    >
      <Box as={FaDatabase} color="red.500" boxSize={8} />
      <Text color="white" fontSize="lg" fontWeight="bold">
        No hay datos disponibles
      </Text>
    </HStack>
  );
};
