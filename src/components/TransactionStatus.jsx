import { Badge } from '@chakra-ui/react';

export default function TransactionStatus({ status }) {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'concluido':
      case 'sucesso':
        return 'green';
      case 'pendente':
        return 'yellow';
      case 'falha':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <Badge colorScheme={getStatusColor(status)}>
      {status}
    </Badge>
  );
}