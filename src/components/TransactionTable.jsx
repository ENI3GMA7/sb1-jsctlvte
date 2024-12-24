import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import TransactionStatus from './TransactionStatus';
import { formatDateTime } from '../utils/formatters';

export default function TransactionTable({ transactions }) {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>MSISDN</Th>
          <Th isNumeric>Valor</Th>
          <Th>Referência</Th>
          <Th>Estado</Th>
          <Th>Data de Cracao</Th>
          <Th>Tipo</Th>
        </Tr>
      </Thead>
      <Tbody>
        {transactions.map((transaction) => (
          <Tr key={transaction.id}>
            <Td>{transaction.id}</Td>
            <Td>{transaction.msisdn}</Td>
            <Td isNumeric>{transaction.valor}</Td>
            <Td>{transaction.referencia}</Td>
            <Td>
              <TransactionStatus status={transaction.status} />
            </Td>
            <Td>{transaction.data_hora}</Td>
            <Td>{transaction.tipo}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
