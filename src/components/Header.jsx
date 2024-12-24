import { Box, Flex, IconButton, Text, useColorMode } from '@chakra-ui/react';
import { FiMenu, FiBell, FiUser } from 'react-icons/fi';

export default function Header({ onMenuClick }) {
  return (
    <Box
      as="header"
      pos="fixed"
      w="100%"
      bg="white"
      boxShadow="sm"
      zIndex="banner"
    >
      <Flex h="60px" px={4} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <IconButton
            icon={<FiMenu />}
            variant="ghost"
            onClick={onMenuClick}
            aria-label="Menu"
            mr={4}
          />
          <Text fontSize="xl" fontWeight="bold">Painel Administrativo</Text>
        </Flex>

        <Flex alignItems="center">
          <IconButton
            icon={<FiBell />}
            variant="ghost"
            aria-label="Notificações"
            mr={2}
          />
          <IconButton
            icon={<FiUser />}
            variant="ghost"
            aria-label="Menu do usuário"
          />
        </Flex>
      </Flex>
    </Box>
  );
}