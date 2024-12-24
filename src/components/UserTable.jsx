import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { formatCurrency } from '../utils/formatters';

export default function UserTable({ users }) {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th isNumeric>Total Produtos</Th>
          <Th isNumeric>Saldo</Th>
          <Th>Ações</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user) => (
          <Tr key={user.id}>
            <Td>{user.id}</Td>
            <Td>{user.nome}</Td>
            <Td>{user.email}</Td>
            <Td isNumeric>{user.total_produtos || 0}</Td>
            <Td isNumeric>{formatCurrency(user.saldo)}</Td>
            <Td>
              <Button
                as={RouterLink}
                to={`/users/${user.id}/transactions`}
                size="sm"
                colorScheme="blue"
              >
                Ver Transações
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}