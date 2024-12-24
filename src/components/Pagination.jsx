import { HStack, Button, Text } from '@chakra-ui/react';

export default function Pagination({ page, onPageChange, hasMore }) {
  return (
    <HStack spacing={4} mt={6} justifyContent="center">
      <Button
        onClick={() => onPageChange(page - 1)}
        isDisabled={page === 1}
      >
        Anterior
      </Button>
      <Text>Página {page}</Text>
      <Button
        onClick={() => onPageChange(page + 1)}
        isDisabled={!hasMore}
      >
        Próxima
      </Button>
    </HStack>
  );
}