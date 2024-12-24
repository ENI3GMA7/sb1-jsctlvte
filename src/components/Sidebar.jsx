import { Box, VStack, Icon, Text, Link } from '@chakra-ui/react';
import { FiHome, FiUsers, FiSettings, FiBox, FiUserCheck, FiUserX, FiUserPlus } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';

const MenuItem = ({ icon, children, to }) => (
  <Link
    as={RouterLink}
    to={to}
    w="full"
    _hover={{ bg: 'gray.100', color: 'blue.500' }}
    p={3}
    borderRadius="md"
  >
    <Box display="flex" alignItems="center">
      <Icon as={icon} mr={3} />
      <Text>{children}</Text>
    </Box>
  </Link>
);

export default function Sidebar() {
  return (
    <Box
      as="nav"
      pos="fixed"
      left={0}
      h="100vh"
      w="250px"
      bg="white"
      borderRight="1px"
      borderColor="gray.200"
      py={5}
    >
      <VStack spacing={1} align="stretch" px={4}>
        <MenuItem icon={FiHome} to="/">Painel</MenuItem>
        <MenuItem icon={FiUsers} to="/users">Todos Usuários</MenuItem>
        <MenuItem icon={FiUserCheck} to="/users/active">Usuários Ativos</MenuItem>
        <MenuItem icon={FiUserX} to="/users/pending">Usuários Pendentes</MenuItem>
        <MenuItem icon={FiUserPlus} to="/users/unreviewed">Usuários Não Revisados</MenuItem>
        <MenuItem icon={FiBox} to="/products">Produtos</MenuItem>
        <MenuItem icon={FiSettings} to="/settings">Configurações</MenuItem>
      </VStack>
    </Box>
  );
}