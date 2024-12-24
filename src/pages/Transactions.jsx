import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Text,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import { fetchUserTransactions } from '../services/api';
import TransactionTable from '../components/TransactionTable';
import Pagination from '../components/Pagination';

export default function Transactions() {
  const { userId } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const toast = useToast();

  useEffect(() => {
    loadTransactions();
  }, [userId, page]);

  const loadTransactions = async () => {
    try {
      setLoading(true);
      const data = await fetchUserTransactions(userId, page);
      setTransactions(data);
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Falha ao carregar transações',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minH="400px">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Transações do Usuário
      </Text>
      
      <Box overflowX="auto">
        <TransactionTable transactions={transactions} />
      </Box>

      <Pagination
        page={page}
        onPageChange={setPage}
        hasMore={transactions.length === 10}
      />
    </Box>
  );
}