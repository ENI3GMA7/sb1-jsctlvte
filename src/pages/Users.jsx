import { useState, useEffect } from 'react';
import {
  Box,
  Spinner,
  Text,
  useToast
} from '@chakra-ui/react';
import { fetchUsers } from '../services/api';
import UserTable from '../components/UserTable';
import Pagination from '../components/Pagination';

export default function Users({ status }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const toast = useToast();

  useEffect(() => {
    loadUsers();
  }, [page, status]);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await fetchUsers(page);
      setUsers(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load users',
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
        {status ? `${status.charAt(0).toUpperCase() + status.slice(1)} Users` : 'All Users'}
      </Text>
      
      <Box overflowX="auto">
        <UserTable users={users} />
      </Box>

      <Pagination
        page={page}
        onPageChange={setPage}
        hasMore={users.length === 10}
      />
    </Box>
  );
}